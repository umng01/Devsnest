import './App.css';

function wallpper() {
  return (
    <div>
      <img src="https://wallpaperaccess.com/full/1630412.jpg" alt="" />
    </div>
  );
}

function Box(){
    return <div className="box"></div>
  };
  function Row(){
    return (
      <div className="row">
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box> 
        <Box></Box>
        
       </div> 
    );
  };
  
  function blacknwhite(){
    return (
      <div>
        <div className="block">
          <Row></Row>
          <Row></Row>
          <Row></Row>
          <Row></Row>
          <Row></Row>
          <Row></Row>
          <Row></Row>
          <Row></Row> 
           
        </div>
       </div> 
    );
  };


export default wallpper;
// export default blacknwhite;