import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import Button from "./Button";

const DeleteDialog = ({ application, loading, onConfirm, onCancel }) => (
  <AlertDialog
    open={Boolean(application)}
    onOpenChange={(open) => !open && onCancel()}
  >
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete application?</AlertDialogTitle>
        <AlertDialogDescription>
          {application?.company} will be permanently removed. This can't be
          undone.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <Button type="button" variant="outline2" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          type="button"
          variant="danger"
          loading={loading}
          onClick={onConfirm}
        >
          Delete
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default DeleteDialog;
