interface IProps {
    children: React.ReactNode
}

const Container = ({children}: IProps) => {
    return (
        <div className="container mx-auto">
            {children}
        </div>
    )
}

export default Container