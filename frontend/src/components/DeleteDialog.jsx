import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import Button from "./Button";
import { Shredder } from "lucide-react";

const DeleteDialog = ({ application, loading, onConfirm, onCancel }) => (
  <AlertDialog
    open={Boolean(application)}
    onOpenChange={(open) => !open && onCancel()}
  >
    <AlertDialogContent className={"flex"}>
      <Shredder strokeWidth={1.25} className="w-20 h-auto hidden md:block" />
      <div className="flex flex-col gap-2">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
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
      </div>
    </AlertDialogContent>
  </AlertDialog>
);

export default DeleteDialog;
