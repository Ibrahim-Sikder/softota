import React, { useState } from "react";
import style from '../../../../components/UserDashBoard/UserDashBoard.module.css';
import UserDashBoardLeft from "../../../../components/UserDashBoard/UserDashBoardLeft";
import RightSideTopBar from "../../../../components/UserDashBoard/RightSideTopBar";
import dynamic from "next/dynamic";
import styling from './visaSearch.module.css'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { CheckCircle } from '@mui/icons-material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import TextField from '@mui/material/TextField';
import MoveText from "../../../../components/UserDashBoard/MoveText/MoveText";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('567 BDT', '989 BDT', ' 345 BDT', '456 BDT', '15,456 BDT'),
];





const VisaSearch = () => {
  const [showDetail, setShowDetail] = useState(true)
  const [profession, setProfession] = useState('')
  const [loader, setLoader] = useState(false);
  const downloadPDF = () => {
    const capture = document.querySelector('.actual-receipt');
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    })
  }


  const handleShowDetail = () => {
    setShowDetail(showDetail => !showDetail)
  }

  return (
    <div>
      <div className={style.sideBarWrap}>
        <div className={style.leftSideBar}>
          <UserDashBoardLeft />
        </div>
        <div className={style.rightSideBar}>
          <div className={style.rightSideWrap}>
            <div className={style.profileTop}>
              <RightSideTopBar />
             <MoveText/>
            </div>
            <div className={styling.visa}>
              <div className={styling.visaType}>
                <div>
                  <h4 className=" text-2xl ">Required Documents for Malaysia Tourist Visa</h4>
                  <p className=" mb-5 mt-3">Visa Type : Studnet Visa</p>
                  <p className=" font-bold text-xl ">Duration and Cost Details</p>
                </div>





                <div className={styling.visaDownload}>
                  <div className="receipt-actions-div">
                    <div className="actions-right">
                      <button
                        className={styling.downloadPdf}
                        onClick={downloadPDF}
                        disabled={!(loader === false)}
                      >
                        {loader ? (
                          <span>Downloading</span>
                        ) : (
                          <span>Download</span>
                        )}

                      </button>
                    </div>
                  </div>
                 <div className={styling.visaLocation}>
                 <TextField className={styling.location} id="standard-basic" label="Visa Submission Location" variant="standard" />
                 </div>
                </div>
              
              </div>





              <div className={styling.visaDetailsWrap}>
                <div className={styling.detailHalf}>
                  <span>Enty</span>
                  <span>Duration</span>
                  <span>Maximum Stay </span>
                  <span>Processing Time</span>
                  <span>Interview</span>
                  <span>Cost</span>
                  <span >View Details</span>
                </div>

                <div className={styling.coastHalf}>
                  <span>Single</span>
                  <span>04 Months</span>
                  <span>10 Days </span>
                  <span>5 Working Day </span>
                  <span>Embassies should  catch the call </span>
                  <span>3888 BDT </span>
                  <span><small className={styling.showDetailBtn} onClick={handleShowDetail}>Show</small></span>
                </div>
                
              </div>
              <div className={styling.pricInfo}>


                <div className={showDetail ? 'translate-y-0 bg-red-600 opacity-0 h-[0px] transition' : `${styling.allCoasInfo}`}>
                  <div>
                    <h2 className="text-white">Depends on embassy</h2>
                    <h3 className="text-xl mb-5 text-white">Price Break Down</h3>
                  </div>
                  <table>
                      <tr>
                        <th>Embassy Fee</th>
                        <th>Agent Fee</th>
                        <th>Agency Fee</th>
                        <th>Service Charge </th>
                        <th>Total</th>
                      </tr>
                    <tbody>
                      <tr>
                        <td>467 BDT</td>
                        <td>2345 BDT</td>
                        <td>789 BDT</td>
                        <td>588 BDT</td>
                        <td>9899 BDT</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
               
              </div>
              <div className={styling.priceInfo}>
                <h4 className="text-black">Select Your Profession:</h4>
                <div>
                  <select
                    className={styling.professionType}
                    onChange={(e) => {
                      const profession = e.target.value;
                      setProfession(profession)

                    }}
                  >
                    <option value="Business Man" selected>Business Man</option>
                    <option value="Job Holder">Job Holder</option>
                    <option value="Student">Student </option>
                    <option value="Non Studnet">Non Student </option>
                    <option value="Govt Job Holder">Govt Job Holder</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Advocate Lawyer">Advocate Lawyer</option>
                    <option value="House Wife">House Wife </option>
                    <option value="Unemployment">Unemployment </option>
                  </select>


                </div>


              </div>
              <div>
                <p className="text-[#06671D] text-2xl mt-2 mb-5 ">{profession}</p>
              </div>
              <div className={styling.visaRule}>
                <ul>
                  <li> <CheckCircle className={styling.ruleIcon} />
                    <p>  Seven (07) Months Valid Passport with last two Old Passport if have. (if an OLD passport is Lost then a GD copy with a translated notary must be required). Copy of the passport ( Page no 2 & 3 ) should be attached. All old passports must be submitted with the application form.</p>
                  </li>
                  <li>
                    <CheckCircle className={styling.ruleIcon} />
                    <p> Recent 2 copy photographs taken in the last 6 months (white background only, photo size 35 mm X 45 mm, Glossy paper or matt paper).</p>
                  </li>
                  <li>
                    <CheckCircle className={styling.ruleIcon} />
                    <p> Proof of Financial soundness(Parents, Siblings): Personal / Company (salary account) Bank statement of last 06 months (Minimum balance BDT 85,000 for each applicant) with Bank Solvency Certificate. Note : In the Case of Personal Account Statement (Savings Account) - need to provide the Salary Certificate/Pay slip last 03 months.</p>
                  </li>
                  <li>
                    <CheckCircle className={styling.ruleIcon} />
                    <p>Profession proof(Parents, Siblings):Trade license copy, NOC, Visiting card, Id card copy.</p>
                  </li>
                  <li>
                    <CheckCircle className={styling.ruleIcon} />
                    <p> Last Singapore visa copy (If have).</p>
                  </li>
                  <li>
                    <CheckCircle className={styling.ruleIcon} />
                    <p> Vaccination card or certificate.</p>

                  </li>
                  <li>
                    <CheckCircle className={styling.ruleIcon} />
                    <p>Others Documents : In case of sponsorship (Parents, Siblings) they need their bank statements, their profession proof, their NID or passport copy.</p>
                  </li>
                  <li>
                    <CheckCircle className={styling.ruleIcon} />
                    <p> Agency will support this documents: Duly completed visa application form, Return flight ticket, Hotel booking, Personnel/Cover Letter, Itinerary.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(VisaSearch), { ssr: false });
