const Main = (props) => {
    const classes = 'main ' + props.className; 
    
    return (

        <main className={classes}>
            {props.children}
        </main>
    )
}

export default Main;