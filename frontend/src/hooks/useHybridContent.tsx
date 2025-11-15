// FILE: src/hooks/useHybridContent.ts
// Reusable hook for Firebase-first, hardcoded-fallback pattern
// ==============================================================

import { useState, useEffect } from 'react';
import { contentService } from '@/services/content.service';

interface UseHybridContentOptions<T> {
  chapterId: string;
  sectionId: string;
  fallbackData: T;
}

interface UseHybridContentReturn<T> {
  data: T;
  source: 'firebase' | 'hardcoded' | 'loading';
  error: Error | null;
  refresh: () => Promise<void>;
}

/**
 * Custom hook for hybrid content loading
 * Prioritizes Firebase data, falls back to hardcoded data if unavailable
 * 
 * @example
 * const { data, source } = useHybridContent({
 *   chapterId: 'chapter-01',
 *   sectionId: 'epidemiology',
 *   fallbackData: FALLBACK_DATA
 * });
 */
export function useHybridContent<T>({
  chapterId,
  sectionId,
  fallbackData
}: UseHybridContentOptions<T>): UseHybridContentReturn<T> {
  const [data, setData] = useState<T>(fallbackData);
  const [source, setSource] = useState<'firebase' | 'hardcoded' | 'loading'>('loading');
  const [error, setError] = useState<Error | null>(null);

  const loadContent = async () => {
    try {
      setSource('loading');
      setError(null);
      
      const chapter = await contentService.getChapter(chapterId);
      
      // Access data property from section
      if (chapter?.sections?.[sectionId]?.data) {
        // ✅ Firebase data available - use it!
        setData(chapter.sections[sectionId].data as T);
        setSource('firebase');
        
        // FIXED: Use regular parentheses, not backticks
        if (import.meta.env.DEV) {
          console.log(`✅ ${sectionId}: Using Firebase data`);
        }
      } else {
        // ⚠️ No Firebase data - use fallback
        setData(fallbackData);
        setSource('hardcoded');
        
        // FIXED: Use regular parentheses, not backticks
        if (import.meta.env.DEV) {
          console.log(`⚠️ ${sectionId}: Using hardcoded fallback`);
        }
      }
    } catch (err) {
      // ❌ Error loading - stick with fallback
      setError(err as Error);
      setData(fallbackData);
      setSource('hardcoded');
      
      // FIXED: Use regular parentheses, not backticks
      if (import.meta.env.DEV) {
        console.error(`❌ ${sectionId}: Error loading, using fallback:`, err);
      }
    }
  };

  useEffect(() => {
    loadContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterId, sectionId]);

  return {
    data,
    source,
    error,
    refresh: loadContent
  };
}

/**
 * Debug component to show data source
 * Only renders in development mode
 */
export const DataSourceIndicator: React.FC<{ 
  source: 'firebase' | 'hardcoded' | 'loading' 
}> = ({ source }) => {
  // Use import.meta.env.DEV for Vite
  if (!import.meta.env.DEV) return null;

  const styles = {
    firebase: 'bg-green-100 text-green-700 border-green-300',
    hardcoded: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    loading: 'bg-blue-100 text-blue-700 border-blue-300'
  };

  const labels = {
    firebase: '🔥 Firebase Data',
    hardcoded: '📝 Hardcoded Fallback',
    loading: '⏳ Loading...'
  };

  // FIXED: Use curly braces {} for template literal, not backticks `
  return (
    <div className={`text-xs px-3 py-1 rounded mb-2 inline-block border ${styles[source]}`}>
      {labels[source]}
    </div>
  );
};