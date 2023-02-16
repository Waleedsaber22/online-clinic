import { Form } from "antd";
import { Select } from "antd";
const { Option } = Select;
const prefixSelector = (
  <Form.Item name="prefix" noStyle initialValue="20">
    <Select style={{ width: 100 }} className="bg-gray-100">
      <Option data-countrycode="EG" value="20">
        +20 EG
      </Option>
      <Option data-countrycode="US" value="1">
        +1 US
      </Option>
      <Option data-countrycode="DN" value="45">
        +45 DN
      </Option>
      {/* <Option data-countryCode="DZ" value="213">+213</Option>
        <Option data-countryCode="AD" value="376">+376</Option>
        <Option data-countryCode="AO" value="244">+244</Option>
        <Option data-countryCode="AI" value="1264">+1264</Option>
        <Option data-countryCode="AG" value="1268">+1268</Option>
        <Option data-countryCode="AR" value="54">+54</Option>
        <Option data-countryCode="AM" value="374">+374</Option>
        <Option data-countryCode="AW" value="297">+297</Option>
        <Option data-countryCode="AU" value="61">+61</Option>
        <Option data-countryCode="AT" value="43">+43</Option>
        <Option data-countryCode="AZ" value="994">+994</Option>
        <Option data-countryCode="BS" value="1242">+1242</Option>
        <Option data-countryCode="BH" value="973">+973</Option>
        <Option data-countryCode="BD" value="880">+880</Option>
        <Option data-countryCode="BB" value="1246">+1246</Option>
        <Option data-countryCode="BY" value="375">+375</Option>
        <Option data-countryCode="BE" value="32">+32</Option>
        <Option data-countryCode="BZ" value="501">+501</Option>
        <Option data-countryCode="BJ" value="229">+229</Option>
        <Option data-countryCode="BM" value="1441">+1441</Option>
        <Option data-countryCode="BT" value="975">+975</Option>
        <Option data-countryCode="BO" value="591">+591</Option>
        <Option data-countryCode="BA" value="387">+387</Option>
        <Option data-countryCode="BW" value="267">+267</Option>
        <Option data-countryCode="BR" value="55">+55</Option>
        <Option data-countryCode="BN" value="673">+673</Option>
        <Option data-countryCode="BG" value="359">+359</Option>
        <Option data-countryCode="BF" value="226">+226</Option>
        <Option data-countryCode="BI" value="257">+257</Option>
        <Option data-countryCode="KH" value="855">+855</Option>
        <Option data-countryCode="CM" value="237">+237</Option>
        <Option data-countryCode="CA" value="1">+1</Option>
        <Option data-countryCode="CV" value="238">+238</Option>
        <Option data-countryCode="KY" value="1345">+1345</Option>
        <Option data-countryCode="CF" value="236">+236</Option>
        <Option data-countryCode="CL" value="56">+56</Option>
        <Option data-countryCode="CN" value="86">+86</Option>
        <Option data-countryCode="CO" value="57">+57</Option>
        <Option data-countryCode="KM" value="269">+269</Option>
        <Option data-countryCode="CG" value="242">+242</Option>
        <Option data-countryCode="CK" value="682">+682</Option>
        <Option data-countryCode="CR" value="506">+506</Option>
        <Option data-countryCode="HR" value="385">+385</Option>
        <Option data-countryCode="CU" value="53">+53</Option>
        <Option data-countryCode="CY" value="90392">+90392</Option>
        <Option data-countryCode="CY" value="357">+357</Option>
        <Option data-countryCode="CZ" value="42">+42</Option>
        <Option data-countryCode="DK" value="45">+45</Option>
        <Option data-countryCode="DJ" value="253">+253</Option>
        <Option data-countryCode="DM" value="1809">+1809</Option>
        <Option data-countryCode="DO" value="1809">+1809</Option>
        <Option data-countryCode="EC" value="593">+593</Option>
        <Option data-countryCode="EG" value="20">+20</Option>
        <Option data-countryCode="SV" value="503">+503</Option>
        <Option data-countryCode="GQ" value="240">+240</Option>
        <Option data-countryCode="ER" value="291">+291</Option>
        <Option data-countryCode="EE" value="372">+372</Option>
        <Option data-countryCode="ET" value="251">+251</Option>
        <Option data-countryCode="FK" value="500">+500</Option>
        <Option data-countryCode="FO" value="298">+298</Option>
        <Option data-countryCode="FJ" value="679">+679</Option>
        <Option data-countryCode="FI" value="358">+358</Option>
        <Option data-countryCode="FR" value="33">+33</Option>
        <Option data-countryCode="GF" value="594">+594</Option>
        <Option data-countryCode="PF" value="689">+689</Option>
        <Option data-countryCode="GA" value="241">+241</Option>
        <Option data-countryCode="GM" value="220">+220</Option>
        <Option data-countryCode="GE" value="7880">+7880</Option>
        <Option data-countryCode="DE" value="49">+49</Option>
        <Option data-countryCode="GH" value="233">+233</Option>
        <Option data-countryCode="GI" value="350">+350</Option>
        <Option data-countryCode="GR" value="30">+30</Option>
        <Option data-countryCode="GL" value="299">+299</Option>
        <Option data-countryCode="GD" value="1473">+1473</Option>
        <Option data-countryCode="GP" value="590">+590</Option>
        <Option data-countryCode="GU" value="671">+671</Option>
        <Option data-countryCode="GT" value="502">+502</Option>
        <Option data-countryCode="GN" value="224">+224</Option>
        <Option data-countryCode="GW" value="245">+245</Option>
        <Option data-countryCode="GY" value="592">+592</Option>
        <Option data-countryCode="HT" value="509">+509</Option>
        <Option data-countryCode="HN" value="504">+504</Option>
        <Option data-countryCode="HK" value="852">+852</Option>
        <Option data-countryCode="HU" value="36">+36</Option>
        <Option data-countryCode="IS" value="354">+354</Option>
        <Option data-countryCode="IN" value="91">+91</Option>
        <Option data-countryCode="ID" value="62">+62</Option>
        <Option data-countryCode="IR" value="98">+98</Option>
        <Option data-countryCode="IQ" value="964">+964</Option>
        <Option data-countryCode="IE" value="353">+353</Option>
        <Option data-countryCode="IL" value="972">+972</Option>
        <Option data-countryCode="IT" value="39">+39</Option>
        <Option data-countryCode="JM" value="1876">+1876</Option>
        <Option data-countryCode="JP" value="81">+81</Option>
        <Option data-countryCode="JO" value="962">+962</Option>
        <Option data-countryCode="KZ" value="7">+7</Option>
        <Option data-countryCode="KE" value="254">+254</Option>
        <Option data-countryCode="KI" value="686">+686</Option>
        <Option data-countryCode="KP" value="850">+850</Option>
        <Option data-countryCode="KR" value="82">+82</Option>
        <Option data-countryCode="KW" value="965">+965</Option>
        <Option data-countryCode="KG" value="996">+996</Option>
        <Option data-countryCode="LA" value="856">+856</Option>
        <Option data-countryCode="LV" value="371">+371</Option>
        <Option data-countryCode="LB" value="961">+961</Option>
        <Option data-countryCode="LS" value="266">+266</Option>
        <Option data-countryCode="LR" value="231">+231</Option>
        <Option data-countryCode="LY" value="218">+218</Option>
        <Option data-countryCode="LI" value="417">+417</Option>
        <Option data-countryCode="LT" value="370">+370</Option>
        <Option data-countryCode="LU" value="352">+352</Option>
        <Option data-countryCode="MO" value="853">+853</Option>
        <Option data-countryCode="MK" value="389">+389</Option>
        <Option data-countryCode="MG" value="261">+261</Option>
        <Option data-countryCode="MW" value="265">+265</Option>
        <Option data-countryCode="MY" value="60">+60</Option>
        <Option data-countryCode="MV" value="960">+960</Option>
        <Option data-countryCode="ML" value="223">+223</Option>
        <Option data-countryCode="MT" value="356">+356</Option>
        <Option data-countryCode="MH" value="692">+692</Option>
        <Option data-countryCode="MQ" value="596">+596</Option>
        <Option data-countryCode="MR" value="222">+222</Option>
        <Option data-countryCode="YT" value="269">+269</Option>
        <Option data-countryCode="MX" value="52">+52</Option>
        <Option data-countryCode="FM" value="691">+691</Option>
        <Option data-countryCode="MD" value="373">+373</Option>
        <Option data-countryCode="MC" value="377">+377</Option>
        <Option data-countryCode="MN" value="976">+976</Option>
        <Option data-countryCode="MS" value="1664">+1664</Option>
        <Option data-countryCode="MA" value="212">+212</Option>
        <Option data-countryCode="MZ" value="258">+258</Option>
        <Option data-countryCode="MN" value="95">+95</Option>
        <Option data-countryCode="NA" value="264">+264</Option>
        <Option data-countryCode="NR" value="674">+674</Option>
        <Option data-countryCode="NP" value="977">+977</Option>
        <Option data-countryCode="NL" value="31">+31</Option>
        <Option data-countryCode="NC" value="687">+687</Option>
        <Option data-countryCode="NZ" value="64">+64</Option>
        <Option data-countryCode="NI" value="505">+505</Option>
        <Option data-countryCode="NE" value="227">+227</Option>
        <Option data-countryCode="NG" value="234">+234</Option>
        <Option data-countryCode="NU" value="683">+683</Option>
        <Option data-countryCode="NF" value="672">+672</Option>
        <Option data-countryCode="NP" value="670">+670</Option>
        <Option data-countryCode="NO" value="47">+47</Option>
        <Option data-countryCode="OM" value="968">+968</Option>
        <Option data-countryCode="PW" value="680">+680</Option>
        <Option data-countryCode="PA" value="507">+507</Option>
        <Option data-countryCode="PG" value="675">+675</Option>
        <Option data-countryCode="PY" value="595">+595</Option>
        <Option data-countryCode="PE" value="51">+51</Option>
        <Option data-countryCode="PH" value="63">+63</Option>
        <Option data-countryCode="PL" value="48">+48</Option>
        <Option data-countryCode="PT" value="351">+351</Option>
        <Option data-countryCode="PR" value="1787">+1787</Option>
        <Option data-countryCode="QA" value="974">+974</Option>
        <Option data-countryCode="RE" value="262">+262</Option>
        <Option data-countryCode="RO" value="40">+40</Option>
        <Option data-countryCode="RU" value="7">+7</Option>
        <Option data-countryCode="RW" value="250">+250</Option>
        <Option data-countryCode="SM" value="378">+378</Option>
        <Option data-countryCode="ST" value="239">+239</Option>
        <Option data-countryCode="SA" value="966">+966</Option>
        <Option data-countryCode="SN" value="221">+221</Option>
        <Option data-countryCode="CS" value="381">+381</Option>
        <Option data-countryCode="SC" value="248">+248</Option>
        <Option data-countryCode="SL" value="232">+232</Option>
        <Option data-countryCode="SG" value="65">+65</Option>
        <Option data-countryCode="SK" value="421">+421</Option>
        <Option data-countryCode="SI" value="386">+386</Option>
        <Option data-countryCode="SB" value="677">+677</Option>
        <Option data-countryCode="SO" value="252">+252</Option>
        <Option data-countryCode="ZA" value="27">+27</Option>
        <Option data-countryCode="ES" value="34">+34</Option>
        <Option data-countryCode="LK" value="94">+94</Option>
        <Option data-countryCode="SH" value="290">+290</Option>
        <Option data-countryCode="KN" value="1869">+1869</Option>
        <Option data-countryCode="SC" value="1758">+1758</Option>
        <Option data-countryCode="SD" value="249">+249</Option>
        <Option data-countryCode="SR" value="597">+597</Option>
        <Option data-countryCode="SZ" value="268">+268</Option>
        <Option data-countryCode="SE" value="46">+46</Option>
        <Option data-countryCode="CH" value="41">+41</Option>
        <Option data-countryCode="SI" value="963">+963</Option>
        <Option data-countryCode="TW" value="886">+886</Option>
        <Option data-countryCode="TJ" value="7">+7</Option>
        <Option data-countryCode="TH" value="66">+66</Option>
        <Option data-countryCode="TG" value="228">+228</Option>
        <Option data-countryCode="TO" value="676">+676</Option>
        <Option data-countryCode="TT" value="1868">+1868</Option>
        <Option data-countryCode="TN" value="216">+216</Option>
        <Option data-countryCode="TR" value="90">+90</Option>
        <Option data-countryCode="TM" value="7">+7</Option>
        <Option data-countryCode="TM" value="993">+993</Option>
        <Option data-countryCode="TC" value="1649">+1649</Option>
        <Option data-countryCode="TV" value="688">+688</Option>
        <Option data-countryCode="UG" value="256">+256</Option>
        <Option data-countryCode="GB" value="44">+44</Option>
        <Option data-countryCode="UA" value="380">+380</Option>
        <Option data-countryCode="AE" value="971">+971</Option>
        <Option data-countryCode="UY" value="598">+598</Option>
        <Option data-countryCode="US" value="1">+1</Option>
        <Option data-countryCode="UZ" value="7">+7</Option>
        <Option data-countryCode="VU" value="678">+678</Option>
        <Option data-countryCode="VA" value="379">+379</Option>
        <Option data-countryCode="VE" value="58">+58</Option>
        <Option data-countryCode="VN" value="84">+84</Option>
        <Option data-countryCode="VG" value="84">+1284</Option>
        <Option data-countryCode="VI" value="84">+1340</Option>
        <Option data-countryCode="WF" value="681">+681</Option>
        <Option data-countryCode="YE" value="969">+969</Option>
        <Option data-countryCode="YE" value="967">+967</Option>
        <Option data-countryCode="ZM" value="260">+260</Option>
        <Option data-countryCode="ZW" value="263">+263</Option> */}
    </Select>
  </Form.Item>
);
const suffixSelector = (
  <Form.Item name="suffix" noStyle className="bg-gray-100">
    <Select style={{ width: 70 }}>
      <Option value="AFN">Afghan Afghani - ؋</Option>
      <Option value="ALL">Albanian Lek - Lek</Option>
      <Option value="DZD">Algerian Dinar - دج</Option>
      <Option value="AOA">Angolan Kwanza - Kz</Option>
      <Option value="ARS">Argentine Peso - $</Option>
      <Option value="AMD">Armenian Dram - ֏</Option>
      <Option value="AWG">Aruban Florin - ƒ</Option>
      <Option value="AUD">Australian Dollar - $</Option>
      <Option value="AZN">Azerbaijani Manat - m</Option>
      <Option value="BSD">Bahamian Dollar - B$</Option>
      <Option value="BHD">Bahraini Dinar - .د.ب</Option>
      <Option value="BDT">Bangladeshi Taka - ৳</Option>
      <Option value="BBD">Barbadian Dollar - Bds$</Option>
      <Option value="BYR">Belarusian Ruble - Br</Option>
      <Option value="BEF">Belgian Franc - fr</Option>
      <Option value="BZD">Belize Dollar - $</Option>
      <Option value="BMD">Bermudan Dollar - $</Option>
      <Option value="BTN">Bhutanese Ngultrum - Nu.</Option>
      <Option value="BTC">Bitcoin - ฿</Option>
      <Option value="BOB">Bolivian Boliviano - Bs.</Option>
      <Option value="BAM">Bosnia-Herzegovina Convertible Mark - KM</Option>
      <Option value="BWP">Botswanan Pula - P</Option>
      <Option value="BRL">Brazilian Real - R$</Option>
      <Option value="GBP">British Pound Sterling - £</Option>
      <Option value="BND">Brunei Dollar - B$</Option>
      <Option value="BGN">Bulgarian Lev - Лв.</Option>
      <Option value="BIF">Burundian Franc - FBu</Option>
      <Option value="KHR">Cambodian Riel - KHR</Option>
      <Option value="CAD">Canadian Dollar - $</Option>
      <Option value="CVE">Cape Verdean Escudo - $</Option>
      <Option value="KYD">Cayman Islands Dollar - $</Option>
      <Option value="XOF">CFA Franc BCEAO - CFA</Option>
      <Option value="XAF">CFA Franc BEAC - FCFA</Option>
      <Option value="XPF">CFP Franc - ₣</Option>
      <Option value="CLP">Chilean Peso - $</Option>
      <Option value="CNY">Chinese Yuan - ¥</Option>
      <Option value="COP">Colombian Peso - $</Option>
      <Option value="KMF">Comorian Franc - CF</Option>
      <Option value="CDF">Congolese Franc - FC</Option>
      <Option value="CRC">Costa Rican ColÃ³n - ₡</Option>
      <Option value="HRK">Croatian Kuna - kn</Option>
      <Option value="CUC">Cuban Convertible Peso - $, CUC</Option>
      <Option value="CZK">Czech Republic Koruna - Kč</Option>
      <Option value="DKK">Danish Krone - Kr.</Option>
      <Option value="DJF">Djiboutian Franc - Fdj</Option>
      <Option value="DOP">Dominican Peso - $</Option>
      <Option value="XCD">East Caribbean Dollar - $</Option>
      <Option value="EGP">Egyptian Pound - ج.م</Option>
      <Option value="ERN">Eritrean Nakfa - Nfk</Option>
      <Option value="EEK">Estonian Kroon - kr</Option>
      <Option value="ETB">Ethiopian Birr - Nkf</Option>
      <Option value="EUR">Euro - €</Option>
      <Option value="FKP">Falkland Islands Pound - £</Option>
      <Option value="FJD">Fijian Dollar - FJ$</Option>
      <Option value="GMD">Gambian Dalasi - D</Option>
      <Option value="GEL">Georgian Lari - ლ</Option>
      <Option value="DEM">German Mark - DM</Option>
      <Option value="GHS">Ghanaian Cedi - GH₵</Option>
      <Option value="GIP">Gibraltar Pound - £</Option>
      <Option value="GRD">Greek Drachma - ₯, Δρχ, Δρ</Option>
      <Option value="GTQ">Guatemalan Quetzal - Q</Option>
      <Option value="GNF">Guinean Franc - FG</Option>
      <Option value="GYD">Guyanaese Dollar - $</Option>
      <Option value="HTG">Haitian Gourde - G</Option>
      <Option value="HNL">Honduran Lempira - L</Option>
      <Option value="HKD">Hong Kong Dollar - $</Option>
      <Option value="HUF">Hungarian Forint - Ft</Option>
      <Option value="ISK">Icelandic KrÃ³na - kr</Option>
      <Option value="INR">Indian Rupee - ₹</Option>
      <Option value="IDR">Indonesian Rupiah - Rp</Option>
      <Option value="IRR">Iranian Rial - ﷼</Option>
      <Option value="IQD">Iraqi Dinar - د.ع</Option>
      <Option value="ILS">Israeli New Sheqel - ₪</Option>
      <Option value="ITL">Italian Lira - L,£</Option>
      <Option value="JMD">Jamaican Dollar - J$</Option>
      <Option value="JPY">Japanese Yen - ¥</Option>
      <Option value="JOD">Jordanian Dinar - ا.د</Option>
      <Option value="KZT">Kazakhstani Tenge - лв</Option>
      <Option value="KES">Kenyan Shilling - KSh</Option>
      <Option value="KWD">Kuwaiti Dinar - ك.د</Option>
      <Option value="KGS">Kyrgystani Som - лв</Option>
      <Option value="LAK">Laotian Kip - ₭</Option>
      <Option value="LVL">Latvian Lats - Ls</Option>
      <Option value="LBP">Lebanese Pound - £</Option>
      <Option value="LSL">Lesotho Loti - L</Option>
      <Option value="LRD">Liberian Dollar - $</Option>
      <Option value="LYD">Libyan Dinar - د.ل</Option>
      <Option value="LTL">Lithuanian Litas - Lt</Option>
      <Option value="MOP">Macanese Pataca - $</Option>
      <Option value="MKD">Macedonian Denar - ден</Option>
      <Option value="MGA">Malagasy Ariary - Ar</Option>
      <Option value="MWK">Malawian Kwacha - MK</Option>
      <Option value="MYR">Malaysian Ringgit - RM</Option>
      <Option value="MVR">Maldivian Rufiyaa - Rf</Option>
      <Option value="MRO">Mauritanian Ouguiya - MRU</Option>
      <Option value="MUR">Mauritian Rupee - ₨</Option>
      <Option value="MXN">Mexican Peso - $</Option>
      <Option value="MDL">Moldovan Leu - L</Option>
      <Option value="MNT">Mongolian Tugrik - ₮</Option>
      <Option value="MAD">Moroccan Dirham - MAD</Option>
      <Option value="MZM">Mozambican Metical - MT</Option>
      <Option value="MMK">Myanmar Kyat - K</Option>
      <Option value="NAD">Namibian Dollar - $</Option>
      <Option value="NPR">Nepalese Rupee - ₨</Option>
      <Option value="ANG">Netherlands Antillean Guilder - ƒ</Option>
      <Option value="TWD">New Taiwan Dollar - $</Option>
      <Option value="NZD">New Zealand Dollar - $</Option>
      <Option value="NIO">Nicaraguan CÃ³rdoba - C$</Option>
      <Option value="NGN">Nigerian Naira - ₦</Option>
      <Option value="KPW">North Korean Won - ₩</Option>
      <Option value="NOK">Norwegian Krone - kr</Option>
      <Option value="OMR">Omani Rial - .ع.ر</Option>
      <Option value="PKR">Pakistani Rupee - ₨</Option>
      <Option value="PAB">Panamanian Balboa - B/.</Option>
      <Option value="PGK">Papua New Guinean Kina - K</Option>
      <Option value="PYG">Paraguayan Guarani - ₲</Option>
      <Option value="PEN">Peruvian Nuevo Sol - S/.</Option>
      <Option value="PHP">Philippine Peso - ₱</Option>
      <Option value="PLN">Polish Zloty - zł</Option>
      <Option value="QAR">Qatari Rial - ق.ر</Option>
      <Option value="RON">Romanian Leu - lei</Option>
      <Option value="RUB">Russian Ruble - ₽</Option>
      <Option value="RWF">Rwandan Franc - FRw</Option>
      <Option value="SVC">Salvadoran ColÃ³n - ₡</Option>
      <Option value="WST">Samoan Tala - SAT</Option>
      <Option value="SAR">Saudi Riyal - ﷼</Option>
      <Option value="RSD">Serbian Dinar - din</Option>
      <Option value="SCR">Seychellois Rupee - SRe</Option>
      <Option value="SLL">Sierra Leonean Leone - Le</Option>
      <Option value="SGD">Singapore Dollar - $</Option>
      <Option value="SKK">Slovak Koruna - Sk</Option>
      <Option value="SBD">Solomon Islands Dollar - Si$</Option>
      <Option value="SOS">Somali Shilling - Sh.so.</Option>
      <Option value="ZAR">South African Rand - R</Option>
      <Option value="KRW">South Korean Won - ₩</Option>
      <Option value="XDR">Special Drawing Rights - SDR</Option>
      <Option value="LKR">Sri Lankan Rupee - Rs</Option>
      <Option value="SHP">St. Helena Pound - £</Option>
      <Option value="SDG">Sudanese Pound - .س.ج</Option>
      <Option value="SRD">Surinamese Dollar - $</Option>
      <Option value="SZL">Swazi Lilangeni - E</Option>
      <Option value="SEK">Swedish Krona - kr</Option>
      <Option value="CHF">Swiss Franc - CHf</Option>
      <Option value="SYP">Syrian Pound - LS</Option>
      <Option value="STD">São Tomé and Príncipe Dobra - Db</Option>
      <Option value="TJS">Tajikistani Somoni - SM</Option>
      <Option value="TZS">Tanzanian Shilling - TSh</Option>
      <Option value="THB">Thai Baht - ฿</Option>
      <Option value="TOP">Tongan pa'anga - $</Option>
      <Option value="TTD">Trinidad & Tobago Dollar - $</Option>
      <Option value="TND">Tunisian Dinar - ت.د</Option>
      <Option value="TRY">Turkish Lira - ₺</Option>
      <Option value="TMT">Turkmenistani Manat - T</Option>
      <Option value="UGX">Ugandan Shilling - USh</Option>
      <Option value="UAH">Ukrainian Hryvnia - ₴</Option>
      <Option value="AED">United Arab Emirates Dirham - إ.د</Option>
      <Option value="UYU">Uruguayan Peso - $</Option>
      <Option value="USD">US Dollar - $</Option>
      <Option value="UZS">Uzbekistan Som - лв</Option>
      <Option value="VUV">Vanuatu Vatu - VT</Option>
      <Option value="VEF">Venezuelan BolÃ­var - Bs</Option>
      <Option value="VND">Vietnamese Dong - ₫</Option>
      <Option value="YER">Yemeni Rial - ﷼</Option>
      <Option value="ZMK">Zambian Kwacha - ZK</Option>
    </Select>
  </Form.Item>
);
export { prefixSelector, suffixSelector };
