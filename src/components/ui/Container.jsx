import { cn } from "@/lib/utils";

function Container({ children, className }) {
    return <div className={cn("relative z-10 mx-auto max-w-[1290px]", className)}>{children}</div>;
}

export default Container;
