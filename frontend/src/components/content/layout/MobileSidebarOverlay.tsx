// FILE: src/components/content/layout/MobileSidebarOverlay.tsx
// Mobile overlay component
// ============================================
interface MobileSidebarOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileSidebarOverlay: React.FC<MobileSidebarOverlayProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;
  
  return (
    <div
      className="fixed inset-0 bg-black/50 z-30 lg:hidden"
      onClick={onClose}
    />
  );
};