import { Link, NavLink } from "react-router-dom";

const FoamHeader =()=>{

    return(
        <>
        <div style={myStyle.head} className='foam-head'>
        <div style={myStyle.inDiv} className="col-md-2 foam-header-overmouse color-odd"><NavLink to='/foam-1'>  <span style={myStyle.spanD}>1</span><br/>Info Pemohon</NavLink></div>
        <div style={myStyle.inDiv} className="col-md-2 foam-header-overmouse color-even"><NavLink to='/foam-2'> <span style={myStyle.spanD}>2</span><br/>Borang Permohonan Permit</NavLink></div>
        <div style={myStyle.inDiv} className="col-md-2 foam-header-overmouse color-odd"><NavLink to='/foam-3'> <span style={myStyle.spanD}>3</span><br/>Bayaran</NavLink></div>
        <div style={myStyle.inDiv} className="col-md-2 foam-header-overmouse color-even"><NavLink to='/foam-4'> <span style={myStyle.spanD}>4</span><br/>Set Pelan</NavLink></div>
        <div style={myStyle.inDiv} className="col-md-2 foam-header-overmouse color-odd"><NavLink to='/foam-5'> <span style={myStyle.spanD}>5</span><br/>Sahkan dan Hantar Permohona</NavLink></div>
        <div style={myStyle.inDiv} className="col-md-2 foam-header-overmouse color-even"><NavLink to='/foam-6'> <span style={myStyle.spanD}>6</span><br/>Ulasan Pegawai</NavLink></div>
            
        </div>
        </>
    )
}

export default FoamHeader ;


const myStyle ={
    head:{
        display:"flex",
        justifyContent : 'space-around'

    },
    inDiv:{
    textAlign :'center',
    backgroundColor: "#fff",
    color: "#4b4b4b",
    
    padding :'2%',
    paddingBottom:'2%',
    fontSize: '13px',
    // cursor:'pointer',
    fontFamily: "'Montserrat', sans-serif",
    color :'white',
    borderLeft:'1px solid white'
    
    },
    spanD:{
        fontSize:'20px'
    }

}