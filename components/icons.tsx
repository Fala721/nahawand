import { Loader2, LucideProps } from "lucide-react";
import { HomeIcon,StarIcon } from "lucide-react";
export const Icons = {
    logo: (porps: LucideProps) => (
        <svg {...porps} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-music"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
    ),
    home: (props: LucideProps) => (
        <HomeIcon {...props}/>
    ),
    star: (props: LucideProps) =>(
        <StarIcon {...props}/>
    ),
    spinner: (props: LucideProps) =>(
        <Loader2 {...props}/>
    ),
}
