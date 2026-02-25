"use client";
import { useEffect, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import NavigationLink from "../Header/Navigation/NavigationLink";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Header: React.FC<ButtonProps> = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full pb-5 transition-all duration-300 ${
          sticky ? " shadow-lg bg-background pt-5" : "shadow-none pt-7"
        }`}
      >
        <div className="lg:py-0 py-2">
          <div className="container px-4 flex items-center justify-between">
            <Logo />
            <nav className="hidden lg:flex grow items-center gap-8 justify-center">
              {headerData.map((item, index) => (
                <NavigationLink key={index} item={item} />
              ))}
            </nav>

            <Sheet open={navbarOpen} onOpenChange={setNavbarOpen}>
              <SheetTrigger
                className="block lg:hidden p-2 rounded-lg"
                aria-label="Toggle mobile menu"
              >
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-xs bg-background border-l border-border p-0"
              >
                <div className="flex items-center justify-between p-4">
                  <Logo />
                </div>
                <nav className="flex flex-col items-start p-4">
                  {headerData.map((item, index) => (
                    <NavigationLink
                      key={index}
                      item={item}
                      isMobile
                      onClick={() => setNavbarOpen(false)}
                    />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
