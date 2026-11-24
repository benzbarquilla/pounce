import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import ApplicationForm from "./ApplicationForm";

const ApplicationSheet = ({ open, onOpenChange, onSaved }) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full bg-sidebar">
        <SheetHeader className={"border-b"}>
          <SheetTitle className={"text-lg"}>Add application</SheetTitle>
          <SheetDescription className={"text-base"}>
            Track a job you applied for or want to apply to.
          </SheetDescription>
        </SheetHeader>

        <ApplicationForm
          onClose={() => onOpenChange(false)}
          onSaved={onSaved}
        />
      </SheetContent>
    </Sheet>
  );
};

export default ApplicationSheet;
