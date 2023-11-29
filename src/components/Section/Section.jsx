

const Section = ({ title, children }) => {
    return (
        <div>
            {title !== undefined && (<h2>{title}</h2>)} 
            {children !== undefined && children}
            </div>
    )
    
}

export default Section;