// components/RowActions.jsx
import { Ellipsis, Eye, Pencil, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const RowActions = ({ onView, onEdit, onDelete }) => (
  <DropdownMenu>
    <DropdownMenuTrigger
      aria-label="Row actions"
      className="btn btn-ghost btn-sm btn-square"
    >
      <Ellipsis className="size-5" />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem onClick={onView} className={"hover:bg-purple/20"}>
        <Eye /> View
      </DropdownMenuItem>
      <DropdownMenuItem onClick={onEdit}>
        <Pencil /> Edit
      </DropdownMenuItem>
      <DropdownMenuItem
        onClick={onDelete}
        className="text-red-500 focus:text-red-500"
      >
        <Trash2 /> Delete
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default RowActions;
