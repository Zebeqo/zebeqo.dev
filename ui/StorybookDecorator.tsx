import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TooltipProvider } from "@/ui/primitive/Tooltip";

export const RootDecorator = (Story: React.ComponentType) => {
  return (
    <TooltipProvider>
      <Story />
    </TooltipProvider>
  );
};

export const ReactQueryDevtoolsDecorator = (Story: React.ComponentType) => {
  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} panelPosition={"left"} />
      <Story />
    </>
  );
};

export const RowDecorator = (Story: React.ComponentType) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Story />
    </div>
  );
};
