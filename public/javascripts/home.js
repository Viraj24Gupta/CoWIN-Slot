function remove(el) {
    var element = el;
    element.remove();
}

let dropdown = $('#district-dropdown');
dropdown.empty();
dropdown.append('<option selected="true" disabled>Choose District</option>');
dropdown.prop('selectedIndex', 0);

const url = 'https://api.myjson.com/bins/7xq2x';

var data = [{ "name" :  "Nicobar" , "id" : "3" },
    { "name" :  "North and Middle Andaman" , "id" : "1" },
    { "name" :  "South Andaman" , "id" : "2" },
    { "name" :  "Anantapur" , "id" : "9" },
    { "name" :  "Chittoor" , "id" : "10" },
    { "name" :  "East Godavari" , "id" : "11" },
    { "name" :  "Guntur" , "id" : "5" },
    { "name" :  "Krishna" , "id" : "4" },
    { "name" :  "Kurnool" , "id" : "7" },
    { "name" :  "Prakasam" , "id" : "12" },
    { "name" :  "Sri Potti Sriramulu Nellore" , "id" : "13" },
    { "name" :  "Srikakulam" , "id" : "14" },
    { "name" :  "Visakhapatnam" , "id" : "8" },
    { "name" :  "Vizianagaram" , "id" : "15" },
    { "name" :  "West Godavari" , "id" : "16" },
    { "name" :  "YSR District, Kadapa (Cuddapah)" , "id" : "6" },
    { "name" :  "Anjaw" , "id" : "22" },
    { "name" :  "Changlang" , "id" : "20" },
    { "name" :  "Dibang Valley" , "id" : "25" },
    { "name" :  "East Kameng" , "id" : "23" },
    { "name" :  "East Siang" , "id" : "42" },
    { "name" :  "Itanagar Capital Complex" , "id" : "17" },
    { "name" :  "Kamle" , "id" : "24" },
    { "name" :  "Kra Daadi" , "id" : "27" },
    { "name" :  "Kurung Kumey" , "id" : "21" },
    { "name" :  "Lepa Rada" , "id" : "33" },
    { "name" :  "Lohit" , "id" : "29" },
    { "name" :  "Longding" , "id" : "40" },
    { "name" :  "Lower Dibang Valley" , "id" : "31" },
    { "name" :  "Lower Siang" , "id" : "18" },
    { "name" :  "Lower Subansiri" , "id" : "32" },
    { "name" :  "Namsai" , "id" : "36" },
    { "name" :  "Pakke Kessang" , "id" : "19" },
    { "name" :  "Papum Pare" , "id" : "39" },
    { "name" :  "Shi Yomi" , "id" : "35" },
    { "name" :  "Siang" , "id" : "37" },
    { "name" :  "Tawang" , "id" : "30" },
    { "name" :  "Tirap" , "id" : "26" },
    { "name" :  "Upper Siang" , "id" : "34" },
    { "name" :  "Upper Subansiri" , "id" : "41" },
    { "name" :  "West Kameng" , "id" : "28" },
    { "name" :  "West Siang" , "id" : "38" },
    { "name" :  "Baksa" , "id" : "46" },
    { "name" :  "Barpeta" , "id" : "47" },
    { "name" :  "Biswanath" , "id" : "765" },
    { "name" :  "Bongaigaon" , "id" : "57" },
    { "name" :  "Cachar" , "id" : "66" },
    { "name" :  "Charaideo" , "id" : "766" },
    { "name" :  "Chirang" , "id" : "58" },
    { "name" :  "Darrang" , "id" : "48" },
    { "name" :  "Dhemaji" , "id" : "62" },
    { "name" :  "Dhubri" , "id" : "59" },
    { "name" :  "Dibrugarh" , "id" : "43" },
    { "name" :  "Dima Hasao" , "id" : "67" },
    { "name" :  "Goalpara" , "id" : "60" },
    { "name" :  "Golaghat" , "id" : "53" },
    { "name" :  "Hailakandi" , "id" : "68" },
    { "name" :  "Hojai" , "id" : "764" },
    { "name" :  "Jorhat" , "id" : "54" },
    { "name" :  "Kamrup Metropolitan" , "id" : "49" },
    { "name" :  "Kamrup Rural" , "id" : "50" },
    { "name" :  "Karbi-Anglong" , "id" : "51" },
    { "name" :  "Karimganj" , "id" : "69" },
    { "name" :  "Kokrajhar" , "id" : "61" },
    { "name" :  "Lakhimpur" , "id" : "63" },
    { "name" :  "Majuli" , "id" : "767" },
    { "name" :  "Morigaon" , "id" : "55" },
    { "name" :  "Nagaon" , "id" : "56" },
    { "name" :  "Nalbari" , "id" : "52" },
    { "name" :  "Sivasagar" , "id" : "44" },
    { "name" :  "Sonitpur" , "id" : "64" },
    { "name" :  "South Salmara Mankachar" , "id" : "768" },
    { "name" :  "Tinsukia" , "id" : "45" },
    { "name" :  "Udalguri" , "id" : "65" },
    { "name" :  "West Karbi Anglong" , "id" : "769" },
    { "name" :  "Araria" , "id" : "74" },
    { "name" :  "Arwal" , "id" : "78" },
    { "name" :  "Aurangabad" , "id" : "77" },
    { "name" :  "Banka" , "id" : "83" },
    { "name" :  "Begusarai" , "id" : "98" },
    { "name" :  "Bhagalpur" , "id" : "82" },
    { "name" :  "Bhojpur" , "id" : "99" },
    { "name" :  "Buxar" , "id" : "100" },
    { "name" :  "Darbhanga" , "id" : "94" },
    { "name" :  "East Champaran" , "id" : "105" },
    { "name" :  "Gaya" , "id" : "79" },
    { "name" :  "Gopalganj" , "id" : "104" },
    { "name" :  "Jamui" , "id" : "107" },
    { "name" :  "Jehanabad" , "id" : "91" },
    { "name" :  "Kaimur" , "id" : "80" },
    { "name" :  "Katihar" , "id" : "75" },
    { "name" :  "Khagaria" , "id" : "101" },
    { "name" :  "Kishanganj" , "id" : "76" },
    { "name" :  "Lakhisarai" , "id" : "84" },
    { "name" :  "Madhepura" , "id" : "70" },
    { "name" :  "Madhubani" , "id" : "95" },
    { "name" :  "Munger" , "id" : "85" },
    { "name" :  "Muzaffarpur" , "id" : "86" },
    { "name" :  "Nalanda" , "id" : "90" },
    { "name" :  "Nawada" , "id" : "92" },
    { "name" :  "Patna" , "id" : "97" },
    { "name" :  "Purnia" , "id" : "73" },
    { "name" :  "Rohtas" , "id" : "81" },
    { "name" :  "Saharsa" , "id" : "71" },
    { "name" :  "Samastipur" , "id" : "96" },
    { "name" :  "Saran" , "id" : "102" },
    { "name" :  "Sheikhpura" , "id" : "93" },
    { "name" :  "Sheohar" , "id" : "87" },
    { "name" :  "Sitamarhi" , "id" : "88" },
    { "name" :  "Siwan" , "id" : "103" },
    { "name" :  "Supaul" , "id" : "72" },
    { "name" :  "Vaishali" , "id" : "89" },
    { "name" :  "West Champaran" , "id" : "106" },
    { "name" :  "Chandigarh" , "id" : "108" },
    { "name" :  "Balod" , "id" : "110" },
    { "name" :  "Baloda bazar" , "id" : "111" },
    { "name" :  "Balrampur" , "id" : "112" },
    { "name" :  "Bastar" , "id" : "113" },
    { "name" :  "Bemetara" , "id" : "114" },
    { "name" :  "Bijapur" , "id" : "115" },
    { "name" :  "Bilaspur" , "id" : "219" },
    { "name" :  "Dantewada" , "id" : "117" },
    { "name" :  "Dhamtari" , "id" : "118" },
    { "name" :  "Durg" , "id" : "119" },
    { "name" :  "Gariaband" , "id" : "120" },
    { "name" :  "Gaurela Pendra Marwahi " , "id" : "136" },
    { "name" :  "Janjgir-Champa" , "id" : "121" },
    { "name" :  "Jashpur" , "id" : "122" },
    { "name" :  "Kanker" , "id" : "123" },
    { "name" :  "Kawardha" , "id" : "135" },
    { "name" :  "Kondagaon" , "id" : "124" },
    { "name" :  "Korba" , "id" : "125" },
    { "name" :  "Koriya" , "id" : "126" },
    { "name" :  "Mahasamund" , "id" : "127" },
    { "name" :  "Mungeli" , "id" : "128" },
    { "name" :  "Narayanpur" , "id" : "129" },
    { "name" :  "Raigarh" , "id" : "130" },
    { "name" :  "Raipur" , "id" : "109" },
    { "name" :  "Rajnandgaon" , "id" : "131" },
    { "name" :  "Sukma" , "id" : "132" },
    { "name" :  "Surajpur" , "id" : "133" },
    { "name" :  "Surguja" , "id" : "134" },
    { "name" :  "Dadra and Nagar Haveli" , "id" : "137" },
    { "name" :  "Central Delhi" , "id" : "141" },
    { "name" :  "East Delhi" , "id" : "145" },
    { "name" :  "New Delhi" , "id" : "140" },
    { "name" :  "North Delhi" , "id" : "146" },
    { "name" :  "North East Delhi" , "id" : "147" },
    { "name" :  "North West Delhi" , "id" : "143" },
    { "name" :  "Shahdara" , "id" : "148" },
    { "name" :  "South Delhi" , "id" : "149" },
    { "name" :  "South East Delhi" , "id" : "144" },
    { "name" :  "South West Delhi" , "id" : "150" },
    { "name" :  "West Delhi" , "id" : "142" },
    { "name" :  "North Goa" , "id" : "151" },
    { "name" :  "South Goa" , "id" : "152" },
    { "name" :  "Ahmedabad" , "id" : "154" },
    { "name" :  "Ahmedabad Corporation" , "id" : "770" },
    { "name" :  "Amreli" , "id" : "174" },
    { "name" :  "Anand" , "id" : "179" },
    { "name" :  "Aravalli" , "id" : "158" },
    { "name" :  "Banaskantha" , "id" : "159" },
    { "name" :  "Bharuch" , "id" : "180" },
    { "name" :  "Bhavnagar" , "id" : "175" },
    { "name" :  "Bhavnagar Corporation" , "id" : "771" },
    { "name" :  "Botad" , "id" : "176" },
    { "name" :  "Chhotaudepur" , "id" : "181" },
    { "name" :  "Dahod" , "id" : "182" },
    { "name" :  "Dang" , "id" : "163" },
    { "name" :  "Devbhumi Dwaraka" , "id" : "168" },
    { "name" :  "Gandhinagar" , "id" : "153" },
    { "name" :  "Gandhinagar Corporation" , "id" : "772" },
    { "name" :  "Gir Somnath" , "id" : "177" },
    { "name" :  "Jamnagar" , "id" : "169" },
    { "name" :  "Jamnagar Corporation" , "id" : "773" },
    { "name" :  "Junagadh" , "id" : "178" },
    { "name" :  "Junagadh Corporation" , "id" : "774" },
    { "name" :  "Kheda" , "id" : "156" },
    { "name" :  "Kutch" , "id" : "170" },
    { "name" :  "Mahisagar" , "id" : "183" },
    { "name" :  "Mehsana" , "id" : "160" },
    { "name" :  "Morbi" , "id" : "171" },
    { "name" :  "Narmada" , "id" : "184" },
    { "name" :  "Navsari" , "id" : "164" },
    { "name" :  "Panchmahal" , "id" : "185" },
    { "name" :  "Patan" , "id" : "161" },
    { "name" :  "Porbandar" , "id" : "172" },
    { "name" :  "Rajkot" , "id" : "173" },
    { "name" :  "Rajkot Corporation" , "id" : "775" },
    { "name" :  "Sabarkantha" , "id" : "162" },
    { "name" :  "Surat" , "id" : "165" },
    { "name" :  "Surat Corporation" , "id" : "776" },
    { "name" :  "Surendranagar" , "id" : "157" },
    { "name" :  "Tapi" , "id" : "166" },
    { "name" :  "Vadodara" , "id" : "155" },
    { "name" :  "Vadodara Corporation" , "id" : "777" },
    { "name" :  "Valsad" , "id" : "167" },
    { "name" :  "Ambala" , "id" : "193" },
    { "name" :  "Bhiwani" , "id" : "200" },
    { "name" :  "Charkhi Dadri" , "id" : "201" },
    { "name" :  "Faridabad" , "id" : "199" },
    { "name" :  "Fatehabad" , "id" : "196" },
    { "name" :  "Gurgaon" , "id" : "188" },
    { "name" :  "Hisar" , "id" : "191" },
    { "name" :  "Jhajjar" , "id" : "189" },
    { "name" :  "Jind" , "id" : "204" },
    { "name" :  "Kaithal" , "id" : "190" },
    { "name" :  "Karnal" , "id" : "203" },
    { "name" :  "Kurukshetra" , "id" : "186" },
    { "name" :  "Mahendragarh" , "id" : "206" },
    { "name" :  "Nuh" , "id" : "205" },
    { "name" :  "Palwal" , "id" : "207" },
    { "name" :  "Panchkula" , "id" : "187" },
    { "name" :  "Panipat" , "id" : "195" },
    { "name" :  "Rewari" , "id" : "202" },
    { "name" :  "Rohtak" , "id" : "192" },
    { "name" :  "Sirsa" , "id" : "194" },
    { "name" :  "Sonipat" , "id" : "198" },
    { "name" :  "Yamunanagar" , "id" : "197" },
    { "name" :  "Chamba" , "id" : "214" },
    { "name" :  "Hamirpur" , "id" : "655" },
    { "name" :  "Kangra" , "id" : "213" },
    { "name" :  "Kinnaur" , "id" : "216" },
    { "name" :  "Kullu" , "id" : "211" },
    { "name" :  "Lahaul Spiti" , "id" : "210" },
    { "name" :  "Mandi" , "id" : "215" },
    { "name" :  "Shimla" , "id" : "208" },
    { "name" :  "Sirmaur" , "id" : "212" },
    { "name" :  "Solan" , "id" : "209" },
    { "name" :  "Una" , "id" : "218" },
    { "name" :  "Anantnag" , "id" : "224" },
    { "name" :  "Bandipore" , "id" : "223" },
    { "name" :  "Baramulla" , "id" : "225" },
    { "name" :  "Budgam" , "id" : "229" },
    { "name" :  "Doda" , "id" : "232" },
    { "name" :  "Ganderbal" , "id" : "228" },
    { "name" :  "Jammu" , "id" : "230" },
    { "name" :  "Kathua" , "id" : "234" },
    { "name" :  "Kishtwar" , "id" : "231" },
    { "name" :  "Kulgam" , "id" : "221" },
    { "name" :  "Kupwara" , "id" : "226" },
    { "name" :  "Poonch" , "id" : "238" },
    { "name" :  "Pulwama" , "id" : "227" },
    { "name" :  "Rajouri" , "id" : "237" },
    { "name" :  "Ramban" , "id" : "235" },
    { "name" :  "Reasi" , "id" : "239" },
    { "name" :  "Samba" , "id" : "236" },
    { "name" :  "Shopian" , "id" : "222" },
    { "name" :  "Srinagar" , "id" : "220" },
    { "name" :  "Udhampur" , "id" : "233" },
    { "name" :  "Bokaro" , "id" : "242" },
    { "name" :  "Chatra" , "id" : "245" },
    { "name" :  "Deoghar" , "id" : "253" },
    { "name" :  "Dhanbad" , "id" : "257" },
    { "name" :  "Dumka" , "id" : "258" },
    { "name" :  "East Singhbhum" , "id" : "247" },
    { "name" :  "Garhwa" , "id" : "243" },
    { "name" :  "Giridih" , "id" : "256" },
    { "name" :  "Godda" , "id" : "262" },
    { "name" :  "Gumla" , "id" : "251" },
    { "name" :  "Hazaribagh" , "id" : "255" },
    { "name" :  "Jamtara" , "id" : "259" },
    { "name" :  "Khunti" , "id" : "252" },
    { "name" :  "Koderma" , "id" : "241" },
    { "name" :  "Latehar" , "id" : "244" },
    { "name" :  "Lohardaga" , "id" : "250" },
    { "name" :  "Pakur" , "id" : "261" },
    { "name" :  "Palamu" , "id" : "246" },
    { "name" :  "Ramgarh" , "id" : "254" },
    { "name" :  "Ranchi" , "id" : "240" },
    { "name" :  "Sahebganj" , "id" : "260" },
    { "name" :  "Seraikela Kharsawan" , "id" : "248" },
    { "name" :  "Simdega" , "id" : "249" },
    { "name" :  "West Singhbhum" , "id" : "263" },
    { "name" :  "Bagalkot" , "id" : "270" },
    { "name" :  "Bangalore Rural" , "id" : "276" },
    { "name" :  "Bangalore Urban" , "id" : "265" },
    { "name" :  "BBMP" , "id" : "294" },
    { "name" :  "Belgaum" , "id" : "264" },
    { "name" :  "Bellary" , "id" : "274" },
    { "name" :  "Bidar" , "id" : "272" },
    { "name" :  "Chamarajanagar" , "id" : "271" },
    { "name" :  "Chikamagalur" , "id" : "273" },
    { "name" :  "Chikkaballapur" , "id" : "291" },
    { "name" :  "Chitradurga" , "id" : "268" },
    { "name" :  "Dakshina Kannada" , "id" : "269" },
    { "name" :  "Davanagere" , "id" : "275" },
    { "name" :  "Dharwad" , "id" : "278" },
    { "name" :  "Gadag" , "id" : "280" },
    { "name" :  "Gulbarga" , "id" : "267" },
    { "name" :  "Hassan" , "id" : "289" },
    { "name" :  "Haveri" , "id" : "279" },
    { "name" :  "Kodagu" , "id" : "283" },
    { "name" :  "Kolar" , "id" : "277" },
    { "name" :  "Koppal" , "id" : "282" },
    { "name" :  "Mandya" , "id" : "290" },
    { "name" :  "Mysore" , "id" : "266" },
    { "name" :  "Raichur" , "id" : "284" },
    { "name" :  "Ramanagara" , "id" : "292" },
    { "name" :  "Shimoga" , "id" : "287" },
    { "name" :  "Tumkur" , "id" : "288" },
    { "name" :  "Udupi" , "id" : "286" },
    { "name" :  "Uttar Kannada" , "id" : "281" },
    { "name" :  "Vijayapura" , "id" : "293" },
    { "name" :  "Yadgir" , "id" : "285" },
    { "name" :  "Alappuzha" , "id" : "301" },
    { "name" :  "Ernakulam" , "id" : "307" },
    { "name" :  "Idukki" , "id" : "306" },
    { "name" :  "Kannur" , "id" : "297" },
    { "name" :  "Kasaragod" , "id" : "295" },
    { "name" :  "Kollam" , "id" : "298" },
    { "name" :  "Kottayam" , "id" : "304" },
    { "name" :  "Kozhikode" , "id" : "305" },
    { "name" :  "Malappuram" , "id" : "302" },
    { "name" :  "Palakkad" , "id" : "308" },
    { "name" :  "Pathanamthitta" , "id" : "300" },
    { "name" :  "Thiruvananthapuram" , "id" : "296" },
    { "name" :  "Thrissur" , "id" : "303" },
    { "name" :  "Wayanad" , "id" : "299" },
    { "name" :  "Kargil" , "id" : "309" },
    { "name" :  "Leh" , "id" : "310" },
    { "name" :  "Agatti Island" , "id" : "796" },
    { "name" :  "Lakshadweep" , "id" : "311" },
    { "name" :  "Agar" , "id" : "320" },
    { "name" :  "Alirajpur" , "id" : "357" },
    { "name" :  "Anuppur" , "id" : "334" },
    { "name" :  "Ashoknagar" , "id" : "354" },
    { "name" :  "Balaghat" , "id" : "338" },
    { "name" :  "Barwani" , "id" : "343" },
    { "name" :  "Betul" , "id" : "362" },
    { "name" :  "Bhind" , "id" : "351" },
    { "name" :  "Bhopal" , "id" : "312" },
    { "name" :  "Burhanpur" , "id" : "342" },
    { "name" :  "Chhatarpur" , "id" : "328" },
    { "name" :  "Chhindwara" , "id" : "337" },
    { "name" :  "Damoh" , "id" : "327" },
    { "name" :  "Datia" , "id" : "350" },
    { "name" :  "Dewas" , "id" : "324" },
    { "name" :  "Dhar" , "id" : "341" },
    { "name" :  "Dindori" , "id" : "336" },
    { "name" :  "Guna" , "id" : "348" },
    { "name" :  "Gwalior" , "id" : "313" },
    { "name" :  "Harda" , "id" : "361" },
    { "name" :  "Hoshangabad" , "id" : "360" },
    { "name" :  "Indore" , "id" : "314" },
    { "name" :  "Jabalpur" , "id" : "315" },
    { "name" :  "Jhabua" , "id" : "340" },
    { "name" :  "Katni" , "id" : "353" },
    { "name" :  "Khandwa" , "id" : "339" },
    { "name" :  "Khargone" , "id" : "344" },
    { "name" :  "Mandla" , "id" : "335" },
    { "name" :  "Mandsaur" , "id" : "319" },
    { "name" :  "Morena" , "id" : "347" },
    { "name" :  "Narsinghpur" , "id" : "352" },
    { "name" :  "Neemuch" , "id" : "323" },
    { "name" :  "Panna" , "id" : "326" },
    { "name" :  "Raisen" , "id" : "359" },
    { "name" :  "Rajgarh" , "id" : "358" },
    { "name" :  "Ratlam" , "id" : "322" },
    { "name" :  "Rewa" , "id" : "316" },
    { "name" :  "Sagar" , "id" : "317" },
    { "name" :  "Satna" , "id" : "333" },
    { "name" :  "Sehore" , "id" : "356" },
    { "name" :  "Seoni" , "id" : "349" },
    { "name" :  "Shahdol" , "id" : "332" },
    { "name" :  "Shajapur" , "id" : "321" },
    { "name" :  "Sheopur" , "id" : "346" },
    { "name" :  "Shivpuri" , "id" : "345" },
    { "name" :  "Sidhi" , "id" : "331" },
    { "name" :  "Singrauli" , "id" : "330" },
    { "name" :  "Tikamgarh" , "id" : "325" },
    { "name" :  "Ujjain" , "id" : "318" },
    { "name" :  "Umaria" , "id" : "329" },
    { "name" :  "Vidisha" , "id" : "355" },
    { "name" :  "Ahmednagar" , "id" : "391" },
    { "name" :  "Akola" , "id" : "364" },
    { "name" :  "Amravati" , "id" : "366" },
    { "name" :  "Aurangabad " , "id" : "397" },
    { "name" :  "Beed" , "id" : "384" },
    { "name" :  "Bhandara" , "id" : "370" },
    { "name" :  "Buldhana" , "id" : "367" },
    { "name" :  "Chandrapur" , "id" : "380" },
    { "name" :  "Dhule" , "id" : "388" },
    { "name" :  "Gadchiroli" , "id" : "379" },
    { "name" :  "Gondia" , "id" : "378" },
    { "name" :  "Hingoli" , "id" : "386" },
    { "name" :  "Jalgaon" , "id" : "390" },
    { "name" :  "Jalna" , "id" : "396" },
    { "name" :  "Kolhapur" , "id" : "371" },
    { "name" :  "Latur" , "id" : "383" },
    { "name" :  "Mumbai" , "id" : "395" },
    { "name" :  "Nagpur" , "id" : "365" },
    { "name" :  "Nanded" , "id" : "382" },
    { "name" :  "Nandurbar" , "id" : "387" },
    { "name" :  "Nashik" , "id" : "389" },
    { "name" :  "Osmanabad" , "id" : "381" },
    { "name" :  "Palghar" , "id" : "394" },
    { "name" :  "Parbhani" , "id" : "385" },
    { "name" :  "Pune" , "id" : "363" },
    { "name" :  "Raigad" , "id" : "393" },
    { "name" :  "Ratnagiri" , "id" : "372" },
    { "name" :  "Sangli" , "id" : "373" },
    { "name" :  "Satara" , "id" : "376" },
    { "name" :  "Sindhudurg" , "id" : "374" },
    { "name" :  "Solapur" , "id" : "375" },
    { "name" :  "Thane" , "id" : "392" },
    { "name" :  "Wardha" , "id" : "377" },
    { "name" :  "Washim" , "id" : "369" },
    { "name" :  "Yavatmal" , "id" : "368" },
    { "name" :  "Bishnupur" , "id" : "398" },
    { "name" :  "Chandel" , "id" : "399" },
    { "name" :  "Churachandpur" , "id" : "400" },
    { "name" :  "Imphal East" , "id" : "401" },
    { "name" :  "Imphal West" , "id" : "402" },
    { "name" :  "Jiribam" , "id" : "410" },
    { "name" :  "Kakching" , "id" : "413" },
    { "name" :  "Kamjong" , "id" : "409" },
    { "name" :  "Kangpokpi" , "id" : "408" },
    { "name" :  "Noney" , "id" : "412" },
    { "name" :  "Pherzawl" , "id" : "411" },
    { "name" :  "Senapati" , "id" : "403" },
    { "name" :  "Tamenglong" , "id" : "404" },
    { "name" :  "Tengnoupal" , "id" : "407" },
    { "name" :  "Thoubal" , "id" : "405" },
    { "name" :  "Ukhrul" , "id" : "406" },
    { "name" :  "East Garo Hills" , "id" : "424" },
    { "name" :  "East Jaintia Hills" , "id" : "418" },
    { "name" :  "East Khasi Hills" , "id" : "414" },
    { "name" :  "North Garo Hills" , "id" : "423" },
    { "name" :  "Ri-Bhoi" , "id" : "417" },
    { "name" :  "South Garo Hills" , "id" : "421" },
    { "name" :  "South West Garo Hills" , "id" : "422" },
    { "name" :  "South West Khasi Hills" , "id" : "415" },
    { "name" :  "West Garo Hills" , "id" : "420" },
    { "name" :  "West Jaintia Hills" , "id" : "416" },
    { "name" :  "West Khasi Hills" , "id" : "419" },
    { "name" :  "Aizawl East" , "id" : "425" },
    { "name" :  "Aizawl West" , "id" : "426" },
    { "name" :  "Champhai" , "id" : "429" },
    { "name" :  "Kolasib" , "id" : "428" },
    { "name" :  "Lawngtlai" , "id" : "432" },
    { "name" :  "Lunglei" , "id" : "431" },
    { "name" :  "Mamit" , "id" : "427" },
    { "name" :  "Serchhip" , "id" : "430" },
    { "name" :  "Siaha" , "id" : "433" },
    { "name" :  "Dimapur" , "id" : "434" },
    { "name" :  "Kiphire" , "id" : "444" },
    { "name" :  "Kohima" , "id" : "441" },
    { "name" :  "Longleng" , "id" : "438" },
    { "name" :  "Mokokchung" , "id" : "437" },
    { "name" :  "Mon" , "id" : "439" },
    { "name" :  "Peren" , "id" : "435" },
    { "name" :  "Phek" , "id" : "443" },
    { "name" :  "Tuensang" , "id" : "440" },
    { "name" :  "Wokha" , "id" : "436" },
    { "name" :  "Zunheboto" , "id" : "442" },
    { "name" :  "Angul" , "id" : "445" },
    { "name" :  "Balangir" , "id" : "448" },
    { "name" :  "Balasore" , "id" : "447" },
    { "name" :  "Bargarh" , "id" : "472" },
    { "name" :  "Bhadrak" , "id" : "454" },
    { "name" :  "Boudh" , "id" : "468" },
    { "name" :  "Cuttack" , "id" : "457" },
    { "name" :  "Deogarh" , "id" : "473" },
    { "name" :  "Dhenkanal" , "id" : "458" },
    { "name" :  "Gajapati" , "id" : "467" },
    { "name" :  "Ganjam" , "id" : "449" },
    { "name" :  "Jagatsinghpur" , "id" : "459" },
    { "name" :  "Jajpur" , "id" : "460" },
    { "name" :  "Jharsuguda" , "id" : "474" },
    { "name" :  "Kalahandi" , "id" : "464" },
    { "name" :  "Kandhamal" , "id" : "450" },
    { "name" :  "Kendrapara" , "id" : "461" },
    { "name" :  "Kendujhar" , "id" : "455" },
    { "name" :  "Khurda" , "id" : "446" },
    { "name" :  "Koraput" , "id" : "451" },
    { "name" :  "Malkangiri" , "id" : "469" },
    { "name" :  "Mayurbhanj" , "id" : "456" },
    { "name" :  "Nabarangpur" , "id" : "470" },
    { "name" :  "Nayagarh" , "id" : "462" },
    { "name" :  "Nuapada" , "id" : "465" },
    { "name" :  "Puri" , "id" : "463" },
    { "name" :  "Rayagada" , "id" : "471" },
    { "name" :  "Sambalpur" , "id" : "452" },
    { "name" :  "Subarnapur" , "id" : "466" },
    { "name" :  "Sundargarh" , "id" : "453" },
    { "name" :  "Karaikal" , "id" : "476" },
    { "name" :  "Mahe" , "id" : "477" },
    { "name" :  "Puducherry" , "id" : "475" },
    { "name" :  "Yanam" , "id" : "478" },
    { "name" :  "Amritsar" , "id" : "485" },
    { "name" :  "Barnala" , "id" : "483" },
    { "name" :  "Bathinda" , "id" : "493" },
    { "name" :  "Faridkot" , "id" : "499" },
    { "name" :  "Fatehgarh Sahib" , "id" : "484" },
    { "name" :  "Fazilka" , "id" : "487" },
    { "name" :  "Ferozpur" , "id" : "480" },
    { "name" :  "Gurdaspur" , "id" : "489" },
    { "name" :  "Hoshiarpur" , "id" : "481" },
    { "name" :  "Jalandhar" , "id" : "492" },
    { "name" :  "Kapurthala" , "id" : "479" },
    { "name" :  "Ludhiana" , "id" : "488" },
    { "name" :  "Mansa" , "id" : "482" },
    { "name" :  "Moga" , "id" : "491" },
    { "name" :  "Pathankot" , "id" : "486" },
    { "name" :  "Patiala" , "id" : "494" },
    { "name" :  "Rup Nagar" , "id" : "497" },
    { "name" :  "Sangrur" , "id" : "498" },
    { "name" :  "SAS Nagar" , "id" : "496" },
    { "name" :  "SBS Nagar" , "id" : "500" },
    { "name" :  "Sri Muktsar Sahib" , "id" : "490" },
    { "name" :  "Tarn Taran" , "id" : "495" },
    { "name" :  "Ajmer" , "id" : "507" },
    { "name" :  "Alwar" , "id" : "512" },
    { "name" :  "Banswara" , "id" : "519" },
    { "name" :  "Baran" , "id" : "516" },
    { "name" :  "Barmer" , "id" : "528" },
    { "name" :  "Bharatpur" , "id" : "508" },
    { "name" :  "Bhilwara" , "id" : "523" },
    { "name" :  "Bikaner" , "id" : "501" },
    { "name" :  "Bundi" , "id" : "514" },
    { "name" :  "Chittorgarh" , "id" : "521" },
    { "name" :  "Churu" , "id" : "530" },
    { "name" :  "Dausa" , "id" : "511" },
    { "name" :  "Dholpur" , "id" : "524" },
    { "name" :  "Dungarpur" , "id" : "520" },
    { "name" :  "Hanumangarh" , "id" : "517" },
    { "name" :  "Jaipur I" , "id" : "505" },
    { "name" :  "Jaipur II" , "id" : "506" },
    { "name" :  "Jaisalmer" , "id" : "527" },
    { "name" :  "Jalore" , "id" : "533" },
    { "name" :  "Jhalawar" , "id" : "515" },
    { "name" :  "Jhunjhunu" , "id" : "510" },
    { "name" :  "Jodhpur" , "id" : "502" },
    { "name" :  "Karauli" , "id" : "525" },
    { "name" :  "Kota" , "id" : "503" },
    { "name" :  "Nagaur" , "id" : "532" },
    { "name" :  "Pali" , "id" : "529" },
    { "name" :  "Pratapgarh" , "id" : "682" },
    { "name" :  "Rajsamand" , "id" : "518" },
    { "name" :  "Sawai Madhopur" , "id" : "534" },
    { "name" :  "Sikar" , "id" : "513" },
    { "name" :  "Sirohi" , "id" : "531" },
    { "name" :  "Sri Ganganagar" , "id" : "509" },
    { "name" :  "Tonk" , "id" : "526" },
    { "name" :  "Udaipur" , "id" : "504" },
    { "name" :  "East Sikkim" , "id" : "535" },
    { "name" :  "North Sikkim" , "id" : "537" },
    { "name" :  "South Sikkim" , "id" : "538" },
    { "name" :  "West Sikkim" , "id" : "536" },
    { "name" :  "Aranthangi" , "id" : "779" },
    { "name" :  "Ariyalur" , "id" : "555" },
    { "name" :  "Attur" , "id" : "578" },
    { "name" :  "Chengalpet" , "id" : "565" },
    { "name" :  "Chennai" , "id" : "571" },
    { "name" :  "Cheyyar" , "id" : "778" },
    { "name" :  "Coimbatore" , "id" : "539" },
    { "name" :  "Cuddalore" , "id" : "547" },
    { "name" :  "Dharmapuri" , "id" : "566" },
    { "name" :  "Dindigul" , "id" : "556" },
    { "name" :  "Erode" , "id" : "563" },
    { "name" :  "Kallakurichi" , "id" : "552" },
    { "name" :  "Kanchipuram" , "id" : "557" },
    { "name" :  "Kanyakumari" , "id" : "544" },
    { "name" :  "Karur" , "id" : "559" },
    { "name" :  "Kovilpatti" , "id" : "780" },
    { "name" :  "Krishnagiri" , "id" : "562" },
    { "name" :  "Madurai" , "id" : "540" },
    { "name" :  "Nagapattinam" , "id" : "576" },
    { "name" :  "Namakkal" , "id" : "558" },
    { "name" :  "Nilgiris" , "id" : "577" },
    { "name" :  "Palani" , "id" : "564" },
    { "name" :  "Paramakudi" , "id" : "573" },
    { "name" :  "Perambalur" , "id" : "570" },
    { "name" :  "Poonamallee" , "id" : "575" },
    { "name" :  "Pudukkottai" , "id" : "546" },
    { "name" :  "Ramanathapuram" , "id" : "567" },
    { "name" :  "Ranipet" , "id" : "781" },
    { "name" :  "Salem" , "id" : "545" },
    { "name" :  "Sivaganga" , "id" : "561" },
    { "name" :  "Sivakasi" , "id" : "580" },
    { "name" :  "Tenkasi" , "id" : "551" },
    { "name" :  "Thanjavur" , "id" : "541" },
    { "name" :  "Theni" , "id" : "569" },
    { "name" :  "Thoothukudi (Tuticorin)" , "id" : "554" },
    { "name" :  "Tiruchirappalli" , "id" : "560" },
    { "name" :  "Tirunelveli" , "id" : "548" },
    { "name" :  "Tirupattur" , "id" : "550" },
    { "name" :  "Tiruppur" , "id" : "568" },
    { "name" :  "Tiruvallur" , "id" : "572" },
    { "name" :  "Tiruvannamalai" , "id" : "553" },
    { "name" :  "Tiruvarur" , "id" : "574" },
    { "name" :  "Vellore" , "id" : "543" },
    { "name" :  "Viluppuram" , "id" : "542" },
    { "name" :  "Virudhunagar" , "id" : "549" },
    { "name" :  "Adilabad" , "id" : "582" },
    { "name" :  "Bhadradri Kothagudem" , "id" : "583" },
    { "name" :  "Hyderabad" , "id" : "581" },
    { "name" :  "Jagtial" , "id" : "584" },
    { "name" :  "Jangaon" , "id" : "585" },
    { "name" :  "Jayashankar Bhupalpally" , "id" : "586" },
    { "name" :  "Jogulamba Gadwal" , "id" : "587" },
    { "name" :  "Kamareddy" , "id" : "588" },
    { "name" :  "Karimnagar" , "id" : "589" },
    { "name" :  "Khammam" , "id" : "590" },
    { "name" :  "Kumuram Bheem" , "id" : "591" },
    { "name" :  "Mahabubabad" , "id" : "592" },
    { "name" :  "Mahabubnagar" , "id" : "593" },
    { "name" :  "Mancherial" , "id" : "594" },
    { "name" :  "Medak" , "id" : "595" },
    { "name" :  "Medchal" , "id" : "596" },
    { "name" :  "Mulugu" , "id" : "612" },
    { "name" :  "Nagarkurnool" , "id" : "597" },
    { "name" :  "Nalgonda" , "id" : "598" },
    { "name" :  "Narayanpet" , "id" : "613" },
    { "name" :  "Nirmal" , "id" : "599" },
    { "name" :  "Nizamabad" , "id" : "600" },
    { "name" :  "Peddapalli" , "id" : "601" },
    { "name" :  "Rajanna Sircilla" , "id" : "602" },
    { "name" :  "Rangareddy" , "id" : "603" },
    { "name" :  "Sangareddy" , "id" : "604" },
    { "name" :  "Siddipet" , "id" : "605" },
    { "name" :  "Suryapet" , "id" : "606" },
    { "name" :  "Vikarabad" , "id" : "607" },
    { "name" :  "Wanaparthy" , "id" : "608" },
    { "name" :  "Warangal(Rural)" , "id" : "609" },
    { "name" :  "Warangal(Urban)" , "id" : "610" },
    { "name" :  "Yadadri Bhuvanagiri" , "id" : "611" },
    { "name" :  "Dhalai" , "id" : "614" },
    { "name" :  "Gomati" , "id" : "615" },
    { "name" :  "Khowai" , "id" : "616" },
    { "name" :  "North Tripura" , "id" : "617" },
    { "name" :  "Sepahijala" , "id" : "618" },
    { "name" :  "South Tripura" , "id" : "619" },
    { "name" :  "Unakoti" , "id" : "620" },
    { "name" :  "West Tripura" , "id" : "621" },
    { "name" :  "Agra" , "id" : "622" },
    { "name" :  "Aligarh" , "id" : "623" },
    { "name" :  "Ambedkar Nagar" , "id" : "625" },
    { "name" :  "Amethi" , "id" : "626" },
    { "name" :  "Amroha" , "id" : "627" },
    { "name" :  "Auraiya" , "id" : "628" },
    { "name" :  "Ayodhya" , "id" : "646" },
    { "name" :  "Azamgarh" , "id" : "629" },
    { "name" :  "Badaun" , "id" : "630" },
    { "name" :  "Baghpat" , "id" : "631" },
    { "name" :  "Bahraich" , "id" : "632" },
    { "name" :  "Balarampur" , "id" : "633" },
    { "name" :  "Ballia" , "id" : "634" },
    { "name" :  "Banda" , "id" : "635" },
    { "name" :  "Barabanki" , "id" : "636" },
    { "name" :  "Bareilly" , "id" : "637" },
    { "name" :  "Basti" , "id" : "638" },
    { "name" :  "Bhadohi" , "id" : "687" },
    { "name" :  "Bijnour" , "id" : "639" },
    { "name" :  "Bulandshahr" , "id" : "640" },
    { "name" :  "Chandauli" , "id" : "641" },
    { "name" :  "Chitrakoot" , "id" : "642" },
    { "name" :  "Deoria" , "id" : "643" },
    { "name" :  "Etah" , "id" : "644" },
    { "name" :  "Etawah" , "id" : "645" },
    { "name" :  "Farrukhabad" , "id" : "647" },
    { "name" :  "Fatehpur" , "id" : "648" },
    { "name" :  "Firozabad" , "id" : "649" },
    { "name" :  "Gautam Buddha Nagar" , "id" : "650" },
    { "name" :  "Ghaziabad" , "id" : "651" },
    { "name" :  "Ghazipur" , "id" : "652" },
    { "name" :  "Gonda" , "id" : "653" },
    { "name" :  "Gorakhpur" , "id" : "654" },
    { "name" :  "Hapur" , "id" : "656" },
    { "name" :  "Hardoi" , "id" : "657" },
    { "name" :  "Hathras" , "id" : "658" },
    { "name" :  "Jalaun" , "id" : "659" },
    { "name" :  "Jaunpur" , "id" : "660" },
    { "name" :  "Jhansi" , "id" : "661" },
    { "name" :  "Kannauj" , "id" : "662" },
    { "name" :  "Kanpur Dehat" , "id" : "663" },
    { "name" :  "Kanpur Nagar" , "id" : "664" },
    { "name" :  "Kasganj" , "id" : "665" },
    { "name" :  "Kaushambi" , "id" : "666" },
    { "name" :  "Kushinagar" , "id" : "667" },
    { "name" :  "Lakhimpur Kheri" , "id" : "668" },
    { "name" :  "Lalitpur" , "id" : "669" },
    { "name" :  "Lucknow" , "id" : "670" },
    { "name" :  "Maharajganj" , "id" : "671" },
    { "name" :  "Mahoba" , "id" : "672" },
    { "name" :  "Mainpuri" , "id" : "673" },
    { "name" :  "Mathura" , "id" : "674" },
    { "name" :  "Mau" , "id" : "675" },
    { "name" :  "Meerut" , "id" : "676" },
    { "name" :  "Mirzapur" , "id" : "677" },
    { "name" :  "Moradabad" , "id" : "678" },
    { "name" :  "Muzaffarnagar" , "id" : "679" },
    { "name" :  "Pilibhit" , "id" : "680" },
    { "name" :  "Prayagraj" , "id" : "624" },
    { "name" :  "Raebareli" , "id" : "681" },
    { "name" :  "Rampur" , "id" : "683" },
    { "name" :  "Saharanpur" , "id" : "684" },
    { "name" :  "Sambhal" , "id" : "685" },
    { "name" :  "Sant Kabir Nagar" , "id" : "686" },
    { "name" :  "Shahjahanpur" , "id" : "688" },
    { "name" :  "Shamli" , "id" : "689" },
    { "name" :  "Shravasti" , "id" : "690" },
    { "name" :  "Siddharthnagar" , "id" : "691" },
    { "name" :  "Sitapur" , "id" : "692" },
    { "name" :  "Sonbhadra" , "id" : "693" },
    { "name" :  "Sultanpur" , "id" : "694" },
    { "name" :  "Unnao" , "id" : "695" },
    { "name" :  "Varanasi" , "id" : "696" },
    { "name" :  "Almora" , "id" : "704" },
    { "name" :  "Bageshwar" , "id" : "707" },
    { "name" :  "Chamoli" , "id" : "699" },
    { "name" :  "Champawat" , "id" : "708" },
    { "name" :  "Dehradun" , "id" : "697" },
    { "name" :  "Haridwar" , "id" : "702" },
    { "name" :  "Nainital" , "id" : "709" },
    { "name" :  "Pauri Garhwal" , "id" : "698" },
    { "name" :  "Pithoragarh" , "id" : "706" },
    { "name" :  "Rudraprayag" , "id" : "700" },
    { "name" :  "Tehri Garhwal" , "id" : "701" },
    { "name" :  "Udham Singh Nagar" , "id" : "705" },
    { "name" :  "Uttarkashi" , "id" : "703" },
    { "name" :  "Alipurduar District" , "id" : "710" },
    { "name" :  "Bankura" , "id" : "711" },
    { "name" :  "Basirhat HD (North 24 Parganas)" , "id" : "712" },
    { "name" :  "Birbhum" , "id" : "713" },
    { "name" :  "Bishnupur HD (Bankura)" , "id" : "714" },
    { "name" :  "Cooch Behar" , "id" : "715" },
    { "name" :  "COOCHBEHAR" , "id" : "783" },
    { "name" :  "Dakshin Dinajpur" , "id" : "716" },
    { "name" :  "Darjeeling" , "id" : "717" },
    { "name" :  "Diamond Harbor HD (S 24 Parganas)" , "id" : "718" },
    { "name" :  "East Bardhaman" , "id" : "719" },
    { "name" :  "Hoogly" , "id" : "720" },
    { "name" :  "Howrah" , "id" : "721" },
    { "name" :  "Jalpaiguri" , "id" : "722" },
    { "name" :  "Jhargram" , "id" : "723" },
    { "name" :  "Kalimpong" , "id" : "724" },
    { "name" :  "Kolkata" , "id" : "725" },
    { "name" :  "Malda" , "id" : "726" },
    { "name" :  "Murshidabad" , "id" : "727" },
    { "name" :  "Nadia" , "id" : "728" },
    { "name" :  "Nandigram HD (East Medinipore)" , "id" : "729" },
    { "name" :  "North 24 Parganas" , "id" : "730" },
    { "name" :  "Paschim Medinipore" , "id" : "731" },
    { "name" :  "Purba Medinipore" , "id" : "732" },
    { "name" :  "Purulia" , "id" : "733" },
    { "name" :  "Rampurhat HD (Birbhum)" , "id" : "734" },
    { "name" :  "South 24 Parganas" , "id" : "735" },
    { "name" :  "Uttar Dinajpur" , "id" : "736" },
    { "name" :  "West Bardhaman" , "id" : "737" },
    { "name" :  "Daman" , "id" : "138" },
    { "name" :  "Diu" , "id" : "139" }];
// Populate dropdown with list of provinces
$.each(data, function (key, entry) {
    dropdown.append($('<option></option>').attr('value', entry.id).text(entry.name));
});
$(document).ready(function () {
    $('select').selectize({
        sortField: 'text'
    });
});
function myFunction() {
    var input, filter, table, tr, td, cell, i1, j1;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("inner_tbl");
    tr = table.getElementsByTagName("tr");
    for (i1 = 1; i1 < tr.length; i1++) {
        // Hide the row initially.
        tr[i1].style.display = "none";

        td = tr[i1].getElementsByTagName("td");
        for (j1 = 0; j1 < td.length; j1++) {
            cell = tr[i1].getElementsByTagName("td")[j1];
            if (cell) {
                if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i1].style.display = "";
                    break;
                }
            }
        }
    }
}