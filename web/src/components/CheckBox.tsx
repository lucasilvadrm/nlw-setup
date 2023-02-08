import * as CheckboxUI from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

const CheckBox = () => {
  return (
    <CheckboxUI.Root className="flex items-center gap-3 group">
      <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
        <CheckboxUI.Indicator>
          <Check size={20} className="text-white" />
        </CheckboxUI.Indicator>
      </div>

      <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
        Beber 2L de água
      </span>
    </CheckboxUI.Root>
  );
};

export default CheckBox;
