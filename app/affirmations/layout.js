export const metadata = {
    title: "Uplifting Quotes",
    description:"A collection of daily affirmations to help you stay positive"
    
}

export default function Layout({children}){
    return(
        <main className="m-8 p-8 dark:bg-zinc-800 rounded-xl bg-zinc-300
        rounded-xl">
            {children}
        </main>
    )
}