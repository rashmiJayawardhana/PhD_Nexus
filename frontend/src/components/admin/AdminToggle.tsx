// components/admin/AdminToggle.tsx
import { Save, Edit } from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';
import { Button } from '../common/Button';

const AdminToggle = () => {
  const { isAdmin, isEditing, toggleAdmin, toggleEditing } = useAdmin();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <Button
        onClick={toggleAdmin}
        variant={isAdmin ? 'primary' : 'secondary'}
        //size="sm"
      >
        {isAdmin ? 'Admin Mode' : 'View Mode'}
      </Button>
      {isAdmin && (
        <Button
                  onClick={toggleEditing}
                  variant="secondary"
                  //size="sm"
                  icon={isEditing ? Save : Edit} children={undefined}        />
      )}
    </div>
  );
};

export default AdminToggle;