import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import ApplicationForm from "./ApplicationForm";

const ApplicationSheet = ({
  open,
  onOpenChange,
  onSaved,
  title,
  description,
}) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full bg-sidebar">
        <SheetHeader className={"border-b"}>
          <SheetTitle className={"text-lg"}>{title}</SheetTitle>
          <SheetDescription className={"text-base"}>
            {description}
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
