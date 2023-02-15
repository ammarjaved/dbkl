import { Link } from "react-router-dom";

const Sidebar = () =>{
    return (
    <>
    <aside>
<div id="sidebar" className="nav-collapse index">

<ul className="sidebar-menu p-3 pt-0">
<li className="active">
<a className="" href="#">
<i className="dbkl-opud-icon icon-senarai"></i><br/>
<span>SENARAI<br/>PERMOHONAN</span>
</a>
</li>
<li data-toggle="collapse" data-target="#report" class="collapsed">
<a href="#">
<i class="dbkl-opud-icon icon-repot"></i><br/>
<span>LAPORAN</span><b class="caret"></b>
</a>
</li>
<ul class="sub-menu collapse" id="report">
<li><a href="#">Total By Permit Type</a></li>
<li><a href="#">List of Permits</a></li>
<li><a href="#">Permits by <br/>Street Name</a></li>
<li><a href="#">Permits Count</a></li>
<li><a href="#">Length And <br/> Deposit</a></li>
<li><a href="#">Permit Activities</a></li>
</ul>
<li>
<Link class="" href="/Prestasi">
<i class="dbkl-opud-icon icon-prestasi"></i><br/>
<span>PRESTASI</span>

<span>SENARAI SYARIKAT</span>
</Link>
</li>
</ul>

</div>

</aside>
    </>
    );
}

export default Sidebar;