import { useEffect, useState } from "react";
import "./App.css";
import {Route,Routes,Link,Navigate} from "react-router-dom"
import Header from "./component/Header/Header"
import View from "./component/View/View"
import Main from "./component/Main/Main"
import About from "./component/About/About"
import Player from "./component/Player/Player";
import { useHistory } from "react-router-dom";
import axios from "axios"
const countryCode =[
  {code:'AF',name: 'Afghanistan'},
  {code:'AX',name: 'Aland Islands'},
  {code:'AL',name: 'Albania'},
  {code:'DZ',name: 'Algeria'},
  {code:'AS',name: 'American Samoa'},
  {code:'AD',name: 'Andorra'},
  {code:'AO',name: 'Angola'},
  {code:'AI',name: 'Anguilla'},
  {code:'AQ',name: 'Antarctica'},
  {code:'AG',name: 'Antigua And Barbuda'},
  {code:'AR',name: 'Argentina'},
  {code:'AM',name: 'Armenia'},
  {code:'AW',name: 'Aruba'},
  {code:'AU',name: 'Australia'},
  {code:'AT',name: 'Austria'},
  {code:'AZ',name: 'Azerbaijan'},
  {code:'BS',name: 'Bahamas'},
  {code:'BH',name: 'Bahrain'},
  {code:'BD',name: 'Bangladesh'},
  {code:'BB',name: 'Barbados'},
  {code:'BY',name: 'Belarus'},
  {code:'BE',name: 'Belgium'},
  {code:'BZ',name: 'Belize'},
  {code:'BJ',name: 'Benin'},
  {code:'BM',name: 'Bermuda'},
  {code:'BT',name: 'Bhutan'},
  {code:'BO',name: 'Bolivia'},
  {code:'BA',name: 'Bosnia And Herzegovina'},
  {code:'BW',name: 'Botswana'},
  {code:'BV',name: 'Bouvet Island'},
  {code:'BR',name: 'Brazil'},
  {code:'IO',name: 'British Indian Ocean Territory'},
  {code:'BN',name: 'Brunei Darussalam'},
  {code:'BG',name: 'Bulgaria'},
  {code:'BF',name: 'Burkina Faso'},
  {code:'BI',name: 'Burundi'},
  {code:'KH',name: 'Cambodia'},
  {code:'CM',name: 'Cameroon'},
  {code:'CA',name: 'Canada'},
  {code:'CV',name: 'Cape Verde'},
  {code:'KY',name: 'Cayman Islands'},
  {code:'CF',name: 'Central African Republic'},
  {code:'TD',name: 'Chad'},
  {code:'CL',name: 'Chile'},
  {code:'CN',name: 'China'},
  {code:'CX',name: 'Christmas Island'},
  {code:'CC',name: 'Cocos (Keeling) Islands'},
  {code:'CO',name: 'Colombia'},
  {code:'KM',name: 'Comoros'},
  {code:'CG',name: 'Congo'},
  {code:'CD',name: 'Congo}, Democratic Republic'},
  {code:'CK',name: 'Cook Islands'},
  {code:'CR',name: 'Costa Rica'},
  {code:'CI',name: 'Cote D Ivoire'},
  {code:'HR',name: 'Croatia'},
  {code:'CU',name: 'Cuba'},
  {code:'CY',name: 'Cyprus'},
  {code:'CZ',name: 'Czech Republic'},
  {code:'DK',name: 'Denmark'},
  {code:'DJ',name: 'Djibouti'},
  {code:'DM',name: 'Dominica'},
  {code:'DO',name: 'Dominican Republic'},
  {code:'EC',name: 'Ecuador'},
  {code:'EG',name: 'Egypt'},
  {code:'SV',name: 'El Salvador'},
  {code:'GQ',name: 'Equatorial Guinea'},
  {code:'ER',name: 'Eritrea'},
  {code:'EE',name: 'Estonia'},
  {code:'ET',name: 'Ethiopia'},
  {code:'FK',name: 'Falkland Islands (Malvinas)'},
  {code:'FO',name: 'Faroe Islands'},
  {code:'FJ',name: 'Fiji'},
  {code:'FI',name: 'Finland'},
  {code:'FR',name: 'France'},
  {code:'GF',name: 'French Guiana'},
  {code:'PF',name: 'French Polynesia'},
  {code:'TF',name: 'French Southern Territories'},
  {code:'GA',name: 'Gabon'},
  {code:'GM',name: 'Gambia'},
  {code:'GE',name: 'Georgia'},
  {code:'DE',name: 'Germany'},
  {code:'GH',name: 'Ghana'},
  {code:'GI',name: 'Gibraltar'},
  {code:'GR',name: 'Greece'},
  {code:'GL',name: 'Greenland'},
  {code:'GD',name: 'Grenada'},
  {code:'GP',name: 'Guadeloupe'},
  {code:'GU',name: 'Guam'},
  {code:'GT',name: 'Guatemala'},
  {code:'GG',name: 'Guernsey'},
  {code:'GN',name: 'Guinea'},
  {code:'GW',name: 'Guinea-Bissau'},
  {code:'GY',name: 'Guyana'},
  {code:'HT',name: 'Haiti'},
  {code:'HM',name: 'Heard Island & Mcdonald Islands'},
  {code:'VA',name: 'Holy See (Vatican City State)'},
  {code:'HN',name: 'Honduras'},
  {code:'HK',name: 'Hong Kong'},
  {code:'HU',name: 'Hungary'},
  {code:'IS',name: 'Iceland'},
  {code:'IN',name: 'India'},
  {code:'ID',name: 'Indonesia'},
  {code:'IR',name: 'Iran}, Islamic Republic Of'},
  {code:'IQ',name: 'Iraq'},
  {code:'IE',name: 'Ireland'},
  {code:'IM',name: 'Isle Of Man'},
  {code:'IL',name: 'Israel'},
  {code:'IT',name: 'Italy'},
  {code:'JM',name: 'Jamaica'},
  {code:'JP',name: 'Japan'},
  {code:'JE',name: 'Jersey'},
  {code:'JO',name: 'Jordan'},
  {code:'KZ',name: 'Kazakhstan'},
  {code:'KE',name: 'Kenya'},
  {code:'KI',name: 'Kiribati'},
  {code:'KR',name: 'Korea'},
  {code:'KW',name: 'Kuwait'},
  {code:'KG',name: 'Kyrgyzstan'},
  {code:'LA',name: "Lao People's Democratic Republic"},
  {code:'LV',name: 'Latvia'},
  {code:'LB',name: 'Lebanon'},
  {code:'LS',name: 'Lesotho'},
  {code:'LR',name: 'Liberia'},
  {code:'LY',name: 'Libyan Arab Jamahiriya'},
  {code:'LI',name: 'Liechtenstein'},
  {code:'LT',name: 'Lithuania'},
  {code:'LU',name: 'Luxembourg'},
  {code:'MO',name: 'Macao'},
  {code:'MK',name: 'Macedonia'},
  {code:'MG',name: 'Madagascar'},
  {code:'MW',name: 'Malawi'},
  {code:'MY',name: 'Malaysia'},
  {code:'MV',name: 'Maldives'},
  {code:'ML',name: 'Mali'},
  {code:'MT',name: 'Malta'},
  {code:'MH',name: 'Marshall Islands'},
  {code:'MQ',name: 'Martinique'},
  {code:'MR',name: 'Mauritania'},
  {code:'MU',name: 'Mauritius'},
  {code:'YT',name: 'Mayotte'},
  {code:'MX',name: 'Mexico'},
  {code:'FM',name: 'Micronesia}, Federated States Of'},
  {code:'MD',name: 'Moldova'},
  {code:'MC',name: 'Monaco'},
  {code:'MN',name: 'Mongolia'},
  {code:'ME',name: 'Montenegro'},
  {code:'MS',name: 'Montserrat'},
  {code:'MA',name: 'Morocco'},
  {code:'MZ',name: 'Mozambique'},
  {code:'MM',name: 'Myanmar'},
  {code:'NA',name: 'Namibia'},
  {code:'NR',name: 'Nauru'},
  {code:'NP',name: 'Nepal'},
  {code:'NL',name: 'Netherlands'},
  {code:'AN',name: 'Netherlands Antilles'},
  {code:'NC',name: 'New Caledonia'},
  {code:'NZ',name: 'New Zealand'},
  {code:'NI',name: 'Nicaragua'},
  {code:'NE',name: 'Niger'},
  {code:'NG',name: 'Nigeria'},
  {code:'NU',name: 'Niue'},
  {code:'NF',name: 'Norfolk Island'},
  {code:'MP',name: 'Northern Mariana Islands'},
  {code:'NO',name: 'Norway'},
  {code:'OM',name: 'Oman'},
  {code:'PK',name: 'Pakistan'},
  {code:'PW',name: 'Palau'},
  {code:'PS',name: 'Palestinian Territory}, Occupied'},
  {code:'PA',name: 'Panama'},
  {code:'PG',name: 'Papua New Guinea'},
  {code:'PY',name: 'Paraguay'},
  {code:'PE',name: 'Peru'},
  {code:'PH',name: 'Philippines'},
  {code:'PN',name: 'Pitcairn'},
  {code:'PL',name: 'Poland'},
  {code:'PT',name: 'Portugal'},
  {code:'PR',name: 'Puerto Rico'},
  {code:'QA',name: 'Qatar'},
  {code:'RE',name: 'Reunion'},
  {code:'RO',name: 'Romania'},
  {code:'RU',name: 'Russian Federation'},
  {code:'RW',name: 'Rwanda'},
  {code:'BL',name: 'Saint Barthelemy'},
  {code:'SH',name: 'Saint Helena'},
  {code:'KN',name: 'Saint Kitts And Nevis'},
  {code:'LC',name: 'Saint Lucia'},
  {code:'MF',name: 'Saint Martin'},
  {code:'PM',name: 'Saint Pierre And Miquelon'},
  {code:'VC',name: 'Saint Vincent And Grenadines'},
  {code:'WS',name: 'Samoa'},
  {code:'SM',name: 'San Marino'},
  {code:'ST',name: 'Sao Tome And Principe'},
  {code:'SA',name: 'Saudi Arabia'},
  {code:'SN',name: 'Senegal'},
  {code:'RS',name: 'Serbia'},
  {code:'SC',name: 'Seychelles'},
  {code:'SL',name: 'Sierra Leone'},
  {code:'SG',name: 'Singapore'},
  {code:'SK',name: 'Slovakia'},
  {code:'SI',name: 'Slovenia'},
  {code:'SB',name: 'Solomon Islands'},
  {code:'SO',name: 'Somalia'},
  {code:'ZA',name: 'South Africa'},
  {code:'GS',name: 'South Georgia And Sandwich Isl.'},
  {code:'ES',name: 'Spain'},
  {code:'LK',name: 'Sri Lanka'},
  {code:'SD',name: 'Sudan'},
  {code:'SR',name: 'Suriname'},
  {code:'SJ',name: 'Svalbard And Jan Mayen'},
  {code:'SZ',name: 'Swaziland'},
  {code:'SE',name: 'Sweden'},
  {code:'CH',name: 'Switzerland'},
  {code:'SY',name: 'Syrian Arab Republic'},
  {code:'TW',name: 'Taiwan'},
  {code:'TJ',name: 'Tajikistan'},
  {code:'TZ',name: 'Tanzania'},
  {code:'TH',name: 'Thailand'},
  {code:'TL',name: 'Timor-Leste'},
  {code:'TG',name: 'Togo'},
  {code:'TK',name: 'Tokelau'},
  {code:'TO',name: 'Tonga'},
  {code:'TT',name: 'Trinidad And Tobago'},
  {code:'TN',name: 'Tunisia'},
  {code:'TR',name: 'Turkey'},
  {code:'TM',name: 'Turkmenistan'},
  {code:'TC',name: 'Turks And Caicos Islands'},
  {code:'TV',name: 'Tuvalu'},
  {code:'UG',name: 'Uganda'},
  {code:'UA',name: 'Ukraine'},
  {code:'AE',name: 'United Arab Emirates'},
  {code:'GB',name: 'United Kingdom'},
  {code:'US',name: 'United States'},
  {code:'UM',name: 'United States Outlying Islands'},
  {code:'UY',name: 'Uruguay'},
  {code:'UZ',name: 'Uzbekistan'},
  {code:'VU',name: 'Vanuatu'},
  {code:'VE',name: 'Venezuela'},
  {code:'VN',name: 'Vietnam'},
  {code:'VG',name: 'Virgin Islands}, British'},
  {code:'VI',name: 'Virgin Islands}, U.S.'},
  {code:'WF',name: 'Wallis And Futuna'},
  {code:'EH',name: 'Western Sahara'},
  {code:'YE',name: 'Yemen'},
  {code:'ZM',name: 'Zambia'},
  {code:'ZW',name: 'Zimbabwe'}
  ];
function App(){
  const [para, setPara] = useState() //stock cost , back log cost , turn number , holiday amp
  const [player,setPlayer] = useState(1)
  //player 1 retailer 
  //player 2 wholsale
  //player 3 distributor
  //player 4 manufactoring
  const [player1,setPlayer1] = useState([100,0,0,0,0,0,0]) //stock,backlog,cost,sale,order,getOrder,sendOrder
  const [player2,setPlayer2] = useState([200,0,0,0,0,0,0]) //stock,backlog,cost,sale,order,getOrder,sendOrder
  const [player3,setPlayer3] = useState([300,0,0,0,0,0,0]) //stock,backlog,cost,sale,order,getOrder,sendOrder
  const [player4,setPlayer4] = useState([400,0,0,0,0,0,0]) //stock,backlog,cost,sale,order,getOrder,sendOrder
  const [manu,setManu]=useState([0,0]) //stockNext,Manu
  const [turn,setTurn] = useState(1)
  const [whoPlay,setWhoPlay] = useState()
  const [price,setPrice] = useState([])
  const [random,setRandom] = useState([])
  const [country,setCountry] = useState(null)
    useEffect(() => {
      const options = {
        method: 'GET',
        url: 'https://www.random.org/integers/',
        headers: {
          // 'X-RapidAPI-Key': '9fb954e0d0msh1fcc78ff571276ap1e3d63jsnf114407345b7',
          // 'X-RapidAPI-Host': 'public-holiday.p.rapidapi.com'
        },
        params: {
          num:5,
          min:10,
          max:50,
          col:1,
          base:10,
          format:"plain",
          rnd:"new"
        }
      };
      let data = []
      // axios.request(options).then(function (response) {
      //   console.log(response.data);
      //   data = response.data.split("\n")
      //   data.pop()
      //   console.log(data);
      //   setPrice(data);
      //   console.log(price);
      // }).catch(function (error) {
      //   console.error(error);
      // });
      
      let temp = player1
      for(let i = 0;i<48;i++){
          data.push(15)
      }
      temp[3]=data[0]
      setPlayer1(temp)
      // setPrice([5,15,5,15,5,15,5,15,5,15,5,15,5,15,5,15])
      setPrice(data)
  }, [])

    return (
      <div>
        <div>
        <nav>
          <Link to  = "/">
          <img
            src="https://i.pinimg.com/736x/6e/24/41/6e24416dc6d19a79272eef27a28d83ec.jpg"
            alt=""
          />
          
          </Link>
          <Link to  = {"/game/"}>
          <h1>Beer Game</h1>
          </Link>
          
          <Link to  = "/about">
              About
          </Link>
        </nav>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Main country={country} countryCode={countryCode} setCountry={setCountry}/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/game/" element={<Player whoPlay={whoPlay} setWhoPlay={setWhoPlay} player={player} setPlayer={setPlayer} 
            price={price} turn={turn} setTurn={setTurn} player1={player1} setPlayer1={setPlayer1}
            player2={player2} setPlayer2={setPlayer2} player3={player3} setPlayer3={setPlayer3}
            player4={player4} setPlayer4={setPlayer4} manu={manu} setManu={setManu}/>}/>
            {/* <Route path="/currencies" element={<Currencies />}/> */}
            {/* <Route path="/price/:currency" element={<Price price={price} setPrice={setPrice}/>}/> */}
            <Route path="currency" element={<Navigate to = "/currencies"/>}/>
          </Routes>
        </div>
      </div>
    );
}

export default App;
