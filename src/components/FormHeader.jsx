

export const FormHeader = ({ title, description }) => {
    const WORD_LEFT = 'Join'.split('');
    const WORD_RIGHT = 'Us!'.split('');
    return (
        <div className="text-black">
            <h1 className="text-xl font-semibold">
                {title}
            </h1>
            <p>{description}</p>
        </div>
    )
}

