import styled from "styled-components"
import { useState } from "react"
import { Input } from "../components/Input"
import { useEffect } from "react"
import { Image } from "../components/Image"

export const TestDrive = ({ setNavbarColor, setBlur, setMore, setNavbarPosition }) => {
    useEffect(() => {
      setNavbarColor("#171a20")
      setBlur("")
      setMore("back")
      setNavbarPosition("sticky")
    }, [setBlur, setMore, setNavbarColor, setNavbarPosition])
    const imageInfo = {
        1 : {
            picture : "/TDE-section-image1.avif",
            alt : "Model S"
        },
        2 : {
            picture : "/TDE-section-image2.avif",
            alt : "Model 3"
        },
        3 : {
            picture : "/TDE-section-image3.avif",
            alt : "Model X"
        },
        4 : {
            picture : "/TDE-section-image4.avif",
            alt : "Model Y"
        }
    }
    const [imageNo, setImageNo] = useState(1)
    const countryList = {
        "AF": "Afghanistan",
        "AX": "Åland Islands",
        "AL": "Albania",
        "DZ": "Algeria",
        "AS": "American Samoa",
        "AD": "Andorra",
        "AO": "Angola",
        "AI": "Anguilla",
        "AQ": "Antarctica",
        "AG": "Antigua and Barbuda",
        "AR": "Argentina",
        "AM": "Armenia",
        "AW": "Aruba",
        "AU": "Australia",
        "AT": "Austria",
        "AZ": "Azerbaijan",
        "BS": "Bahamas",
        "BH": "Bahrain",
        "BD": "Bangladesh",
        "BB": "Barbados",
        "BY": "Belarus",
        "BE": "Belgium",
        "BZ": "Belize",
        "BJ": "Benin",
        "BM": "Bermuda",
        "BT": "Bhutan",
        "BO": "Bolivia",
        "BQ": "Bonaire, Sint Eustatius and Saba",
        "BA": "Bosnia and Herzegovina",
        "BW": "Botswana",
        "BV": "Bouvet Island",
        "BR": "Brazil",
        "IO": "British Indian Ocean Territory",
        "BN": "Brunei Darussalam",
        "BG": "Bulgaria",
        "BF": "Burkina Faso",
        "BI": "Burundi",
        "CV": "Cabo Verde",
        "KH": "Cambodia",
        "CM": "Cameroon",
        "CA": "Canada",
        "KY": "Cayman Islands",
        "CF": "Central African Republic",
        "TD": "Chad",
        "CL": "Chile",
        "CN": "China",
        "CX": "Christmas Island",
        "CC": "Cocos (Keeling) Islands",
        "CO": "Colombia",
        "KM": "Comoros",
        "CD": "Congo (BRazzaville)",
        "CG": "Congo (Kinshasa)",
        "CK": "Cook Islands",
        "CR": "Costa Rica",
        "HR": "Croatia",
        "CU": "Cuba",
        "CW": "Curaçao",
        "CY": "Cyprus",
        "CZ": "Czechia",
        "CI": "Côte d'Ivoire",
        "DK": "Denmark",
        "DJ": "Djibouti",
        "DM": "Dominica",
        "DO": "Dominican Republic",
        "EC": "Ecuador",
        "EG": "Egypt",
        "SV": "El Salvador",
        "GQ": "Equatorial Guinea",
        "ER": "Eritrea",
        "EE": "Estonia",
        "SZ": "Eswatini",
        "ET": "Ethiopia",
        "FK": "Falkland Islands",
        "FO": "Faroe Islands",
        "FJ": "Fiji",
        "FI": "Finland",
        "FR": "France",
        "GF": "French Guiana",
        "PF": "French Polynesia",
        "TF": "French Southern Territories",
        "GA": "Gabon",
        "GM": "Gambia",
        "GE": "Georgia",
        "DE": "Germany",
        "GH": "Ghana",
        "GI": "Gibraltar",
        "GR": "Greece",
        "GL": "Greenland",
        "GD": "Grenada",
        "GP": "Guadeloupe",
        "GU": "Guam",
        "GT": "Guatemala",
        "GG": "Guernsey",
        "GN": "Guinea",
        "GW": "Guinea-Bissau",
        "GY": "Guyana",
        "HT": "Haiti",
        "HM": "Heard Island and McDonald Islands",
        "VA": "Holy See",
        "HN": "Honduras",
        "HK": "Hong Kong",
        "HU": "Hungary",
        "IS": "Iceland",
        "IN": "India",
        "ID": "Indonesia",
        "IR": "Iran",
        "IQ": "Iraq",
        "IE": "Ireland",
        "IM": "Isle of Man",
        "IL": "Israel",
        "IT": "Italy",
        "JM": "Jamaica",
        "JP": "Japan",
        "JE": "Jersey",
        "JO": "Jordan",
        "KZ": "Kazakhstan",
        "KE": "Kenya",
        "KI": "Kiribati",
        "KW": "Kuwait",
        "KG": "Kyrgyzstan",
        "LA": "Lao People's Democratic Republic",
        "LV": "Latvia",
        "LB": "Lebanon",
        "LS": "Lesotho",
        "LR": "Liberia",
        "LY": "Libya",
        "LI": "Liechtenstein",
        "LT": "Lithuania",
        "LU": "Luxembourg",
        "MO": "Macao",
        "MG": "Madagascar",
        "MW": "Malawi",
        "MY": "Malaysia",
        "MV": "Maldives",
        "ML": "Mali",
        "MT": "Malta",
        "MH": "Marshall Islands",
        "MQ": "Martinique",
        "MR": "Mauritania",
        "MU": "Mauritius",
        "YT": "Mayotte",
        "MX": "Mexico",
        "FM": "Micronesia",
        "MD": "Moldova",
        "MC": "Monaco",
        "MN": "Mongolia",
        "ME": "Montenegro",
        "MS": "Montserrat",
        "MA": "Morocco",
        "MZ": "Mozambique",
        "MM": "Myanmar",
        "NA": "Namibia",
        "NR": "Nauru",
        "NP": "Nepal",
        "NL": "Netherlands",
        "NC": "New Caledonia",
        "NZ": "New Zealand",
        "NI": "Nicaragua",
        "NE": "Niger",
        "NG": "Nigeria",
        "NU": "Niue",
        "NF": "Norfolk Island",
        "KP": "North Korea",
        "MP": "Northern Mariana Islands",
        "NO": "Norway",
        "OM": "Oman",
        "PK": "Pakistan",
        "PW": "Palau",
        "PS": "Palestine, State of",
        "PA": "Panama",
        "PG": "Papua New Guinea",
        "PY": "Paraguay",
        "PE": "Peru",
        "PH": "Philippines",
        "PN": "Pitcairn",
        "PL": "Poland",
        "PT": "Portugal",
        "PR": "Puerto Rico",
        "QA": "Qatar",
        "MK": "Republic of North Macedonia",
        "RO": "Romania",
        "RU": "Russian Federation",
        "RW": "Rwanda",
        "RE": "Réunion",
        "BL": "Saint Barthélemy",
        "SH": "Saint Helena, Ascension and Tristan da Cunha",
        "KN": "Saint Kitts and Nevis",
        "LC": "Saint Lucia",
        "MF": "Saint Martin (French part)",
        "PM": "Saint Pierre and Miquelon",
        "VC": "Saint Vincent and the Grenadines",
        "WS": "Samoa",
        "SM": "San Marino",
        "ST": "Sao Tome and Principe",
        "SA": "Saudi Arabia",
        "SN": "Senegal",
        "RS": "Serbia",
        "SC": "Seychelles",
        "SL": "Sierra Leone",
        "SG": "Singapore",
        "SX": "Sint Maarten",
        "SK": "Slovakia",
        "SI": "Slovenia",
        "SB": "Solomon Islands",
        "SO": "Somalia",
        "ZA": "South Africa",
        "GS": "South Georgia and the South Sandwich Islands",
        "KR": "South Korea",
        "SS": "South Sudan",
        "ES": "Spain",
        "LK": "Sri Lanka",
        "SD": "Sudan",
        "SR": "Suriname",
        "SJ": "Svalbard and Jan Mayen",
        "SE": "Sweden",
        "CH": "Switzerland",
        "SY": "Syrian Arab Republic",
        "TW": "Taiwan",
        "TJ": "Tajikistan",
        "TZ": "Tanzania, United Republic of",
        "TH": "Thailand",
        "TL": "Timor-Leste",
        "TG": "Togo",
        "TK": "Tokelau",
        "TO": "Tonga",
        "TT": "Trinidad and Tobago",
        "TN": "Tunisia",
        "TR": "Turkey",
        "TM": "Turkmenistan",
        "TC": "Turks and Caicos Islands",
        "TV": "Tuvalu",
        "UG": "Uganda",
        "UA": "Ukraine",
        "AE": "United Arab Emirates",
        "GB": "United Kingdom of Great Britain and Northern Ireland",
        "UM": "United States Minor Outlying Islands",
        "US": "United States of America",
        "UY": "Uruguay",
        "UZ": "Uzbekistan",
        "VU": "Vanuatu",
        "VE": "Venezuela",
        "VN": "Viet Nam",
        "VG": "Virgin Islands (British)",
        "VI": "Virgin Islands (U.S.)",
        "WF": "Wallis and Futuna",
        "EH": "Western Sahara",
        "YE": "Yemen",
        "ZM": "Zambia",
        "ZW": "Zimbabwe"
    };
    return (
        <TestDriveContainer>
            <section>
                <h1>Schedule A Test Drive</h1>
                <p>
                    Test Drive a Tesla at a store near you. Drivers must have a valid U.S.
                    driver's license and be 18 years of age or older.
                </p>
                <Image image={imageInfo[imageNo].picture} altText={imageInfo[imageNo].alt} />
                <ul>
                    <li className={imageNo  === 1 ? "active" : ""}>
                        <button onClick={() => setImageNo(1)}>Model S</button>
                    </li>
                    <li className={imageNo  === 2 ? "active" : ""}>
                        <button onClick={() => setImageNo(2)}>Model 3</button>
                    </li>
                    <li className={imageNo  === 3 ? "active" : ""}>
                        <button onClick={() => setImageNo(3)}>Model X</button>
                    </li>
                    <li className={imageNo  === 4 ? "active" : ""}>
                        <button onClick={() => setImageNo(4)}>Model Y</button>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Contact Information</h2>
                <FormContainer noValidate>
                    <label><span>First Name</span>
                        <Input type="text"></Input>
                    </label>
                    
                    <label><span>Last Name</span>
                        <Input type="text"></Input>
                    </label>

                    <label><span>Contact Preference</span>
                        <Input type="select" values={{"Phone" : "Phone", "Email" : "Email"}}></Input>
                    </label>
                    
                    <label><span>Phone Number</span>
                        <Input type="text"></Input>
                    </label>

                    <label><span>Email Address</span>
                        <Input type="email"></Input>
                    </label>

                    <label><span>Region</span>
                        <Input type="select" values={countryList} selectedValue="US"></Input>
                    </label>

                    <label><span>Zip Code</span>
                        <Input type="number"></Input>
                    </label>
                    <fieldset>
                        <Input type="checkbox" labelText="I'm interested in solar Powerwall" name="solar"></Input>
                        <Input type="checkbox" labelText="Get Tesla Updates" name="updates"></Input>
                        <p id="disclaimer">
                            By clicking "Submit &#38; Continue" I agree to share the provided information with Tesla to be contacted with more details or offers about Tesla products.
                            I understand these calls or texts may use computer-assisted dialing or pre-recorded messages. This consent is not a condition of the test drive.
                        </p>
                    </fieldset>
                    <button>Submit and Continue</button>
                </FormContainer>

            </section>
        </TestDriveContainer>
    )
}

const TestDriveContainer = styled.div`
    width: 100%;
    max-width: 930px;
    margin: 16px auto 0 auto;
    margin-top: 56px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    section:nth-of-type(1){
        margin-bottom: 100px;
        h1{
            padding: 32px 0 8px 0;
            font-size: 32px;
            transition: font-size ease-in 0.3s;
            @media screen and (min-width: 600px){
                font-size: 48px;
            }
            font-weight: bold;
        }
        p{
            font-size: 16px;
            line-height: 21px;
            letter-spacing: 0.8px;
        }
        ul{
            display: flex;
            flex-direction: column;
            gap: 10px;
            li{
                width: 100%;
                button{
                    text-transform: uppercase;
                    border: 1px solid #a2a3a5;
                    color: #5c5e62;
                    background-color: transparent;
                    width: 100%;
                    font-size: 14px;
                    line-height: 1.2;
                    font-weight: 500;
                    padding: 10px 40px;
                    margin: 16px 8px 0 8px;
                    border-radius: 100px;
                }
            }
            li.active button{
                box-shadow: inset 0px 0px 0px 2px #3e6ae1;
                border-color: #3e6ae1;
            }
            @media screen and (min-width: 600px){
                flex-direction: row;
                li button{
                    margin: 0;
                    padding: 10px 24px;
                }
            }
        }
    }
    section:nth-of-type(2){
        h2{
            padding-top: 28px;
            font-size: 28px;
            margin-bottom: 60px;
        }
        label{
            display: inline-flex;
            flex-direction: column;
            width: 100%;
            span{
                padding:0 0 8px 20px;
            }
        }
        fieldset{
            border: 0;
            padding: 0;
            margin-top: 32px;
            label:nth-of-type(1){
                margin-bottom: 16px;
            }
            p{
                margin: 32px 0 8px 0;
                font-size: 14px;
                line-height: 19px;
                letter-spacing: 0.8px;
            }
        }
        button{
            text-transform: uppercase;
            border: 1px solid #3e6ae1;
            color: #fff;
            background-color: #3e6ae1;
            width: 100%;
            font-size: 14px;
            font-weight: 500;
            padding: 10px 40px;
            border-radius: 100px;
        }
    }
`

const FormContainer = styled.form`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    label{
        grid-column: 1 / 3;
    }
    fieldset{
        grid-column: 1 / 3;
    }
    button{
        grid-column: 1 / 3;
    }
    @media screen and (min-width: 600px){
        grid-template-columns: repeat(2, minmax(280px, 1fr));
        > label:nth-of-type(2n){
            grid-column: 2 / 3;
        }
        >label:nth-of-type(2n + 1){
            grid-column: 1 / 2;
        }
        select{
            min-width: 1px;
        }
        button{
            grid-column: 1 / 2;
        }
    }
    @media screen and (min-width: 800px){
        grid-template-columns: repeat(2, minmax(280px, 1fr)) minmax(100px, 1fr);
    }


`
