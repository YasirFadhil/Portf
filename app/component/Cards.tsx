type CardsProps = {
    title: string
    subtitle?: string
}

export default function Cards({ title, subtitle }: CardsProps) {
    return (
        <div className="bg-port-card border border-port-border/50 rounded-lg p-4 hover:border-port-highlight transition-colors">
            <h3 className="font-bold text-lg">{title}</h3>
            {subtitle && <p className="text-gray-400 text-sm mt-1">{subtitle}</p>}
        </div>
    )
}