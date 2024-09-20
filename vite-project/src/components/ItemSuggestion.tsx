type ItemSuggestionProps = {
    title: string;
}

export function ItemSuggestion( {title} ){
    return (
    <button>{title}</button>
    )
}