function Aniaml(props){
    return (
         <div style={{display: "flex", gap: "20px" , justifyContent:"center"}}>
            <p>{props.Aname}</p>
            <p>{props.sound}</p>
        </div>
    );
}
export default Aniaml;