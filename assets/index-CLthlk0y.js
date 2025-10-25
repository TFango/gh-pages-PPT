(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function k(){const t=document.createElement("style");t.textContent=`
.main {
  display: flex;
  justify-content: center;
}

.main__container {
  width: 80%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1278px) {
  .main__container {
    width: 30%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.main__title {
  margin-top: 100px;
  font-family: Inter;
  font-size: 80px;
  color: rgba(0, 144, 72, 1);
}
  `;const e=document.createElement("div");return e.innerHTML=`
  <main class="main">
    <div class="main__container">
        <h1 class="main__title">Piedra Papel o Tijera</h1>

        <div id="slot-start"></div>

        <div id="slot-logos"></div>
    </div>
    </main>
  `,e.prepend(t),e}function C(t,e){const n=document.createElement("button");n.className="btn",t.id&&(n.id=t.id),n.textContent=t.text,n.disabled=!!t.disabled;const o=document.createElement("style");o.textContent=`
  .btn {
  width: 100%;
  height: 60px;
  background-color: rgba(0, 108, 252, 1);
  border-radius: 10px;
  border: 10px solid rgba(0, 25, 151, 1);
  color: rgba(216, 252, 252, 1);
  font-family: Inter;
  font-size: 20px;
  cursor:pointer;
  transition: transform .06s ease, filter .06s ease;
}
  `,n.prepend(o),e&&n.addEventListener("click",()=>{n.disabled||e()});function s(r){n.textContent=r}function i(r){n.disabled=r}function a(){n.remove(),o.remove()}return{el:n,setText:s,setDisabled:i,destroy:a}}const h="data:image/svg+xml,%3csvg%20width='56'%20height='101'%20viewBox='0%200%2056%20101'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M43.4554%20125.408V80.3017C48.876%2078.2411%2052.7313%2072.9828%2052.7313%2066.8178V42.297H2.58239V66.8178C2.58239%2072.9828%206.43769%2078.2411%2011.8583%2080.3017V125.408H43.4554Z'%20fill='%23FFCAB9'/%3e%3cpath%20d='M31.5486%2045.0562C28.6261%2045.5973%2025.8199%2043.6572%2025.2807%2040.7228L19.4496%208.97543C18.9107%206.04099%2020.8428%203.22334%2023.7653%202.68192C26.6878%202.14085%2029.4939%204.0809%2030.0331%207.01534L35.8643%2038.7627C36.4035%2041.6975%2034.471%2044.5151%2031.5486%2045.0562Z'%20fill='%23FABBA7'/%3e%3cpath%20d='M37.7909%2044.5953C34.9317%2043.7806%2033.2721%2040.7929%2034.0832%2037.9224L42.8606%206.86608C43.672%203.99556%2046.6474%202.32882%2049.5062%203.14319C52.365%203.95791%2054.025%206.94555%2053.2139%209.81606L44.4366%2040.8724C43.6255%2043.7433%2040.65%2045.41%2037.7909%2044.5953Z'%20fill='%23FABBA7'/%3e%3cpath%20d='M7.96348%2047.9365C4.99146%2047.9365%202.58239%2045.5176%202.58239%2042.5334V37.3811C2.58239%2034.397%204.99146%2031.978%207.96348%2031.978C10.9355%2031.978%2013.3446%2034.397%2013.3446%2037.3811V42.5334C13.3446%2045.5176%2010.9355%2047.9365%207.96348%2047.9365Z'%20fill='%23FABBA7'/%3e%3cpath%20d='M18.7256%2047.9365C15.7536%2047.9365%2013.3446%2045.5176%2013.3446%2042.5334V31.5074C13.3446%2028.5232%2015.7536%2026.1043%2018.7256%2026.1043C21.6977%2026.1043%2024.1067%2028.5232%2024.1067%2031.5074V42.5334C24.1067%2045.5176%2021.6977%2047.9365%2018.7256%2047.9365Z'%20fill='%23FABBA7'/%3e%3cpath%20d='M52.7318%2066.818V42.5334C52.7318%2039.5492%2050.3228%2037.1302%2047.3508%2037.1302H29.4877C26.5157%2037.1302%2024.1066%2039.5492%2024.1066%2042.5334C24.1066%2045.5176%2026.5157%2047.9365%2029.4877%2047.9365H41.9697V56.0242C36.9847%2056.9512%2032.0526%2061.6733%2032.0526%2068.3048'%20fill='%23FFCAB9'/%3e%3cpath%20d='M50.2108%200.650582C46.0599%20-0.532444%2041.5429%202.03504%2040.3781%206.1587L35.6034%2023.0531L32.5715%206.54568C31.7753%202.21056%2027.6127%20-0.666848%2023.2976%200.133698C18.9802%200.933208%2016.1159%205.11042%2016.9118%209.44554L19.5026%2023.552C15.5605%2023.1668%2011.6832%2026.0469%2010.9152%2029.9592C5.86272%2027.8146%20-0.114301%2031.8418%200.00166134%2037.3817V66.8182C0.00166134%2073.2301%203.66357%2079.1138%209.27758%2081.985V125.409C9.27758%20126.84%2010.4327%20128%2011.8583%20128C13.284%20128%2014.4391%20126.84%2014.4391%20125.409V80.3017C14.4391%2079.2244%2013.7753%2078.2597%2012.7719%2077.8783C8.22086%2076.1483%205.16318%2071.7033%205.16318%2066.8178V50.016C7.86919%2051.1047%2011.3074%2050.3898%2013.3445%2048.4194C16.2498%2051.2097%2021.2017%2051.209%2024.1063%2048.4194C25.5243%2049.7275%2027.4145%2050.528%2029.4873%2050.528H39.3885V54.0598C34.2659%2055.9391%2029.4715%2061.1114%2029.4715%2068.3049C29.4715%2069.736%2030.6266%2070.8962%2032.0523%2070.8962C33.4779%2070.8962%2034.633%2069.736%2034.633%2068.3049C34.633%2062.9263%2038.6549%2059.276%2042.4396%2058.5722C43.6629%2058.3449%2044.5504%2057.2734%2044.5504%2056.0241V47.9364C44.5504%2046.5053%2043.3952%2045.3451%2041.9696%2045.3451H29.4877C25.7834%2045.2068%2025.7741%2039.8635%2029.4877%2039.7215C35.442%2039.7215%2041.3963%2039.7222%2047.3506%2039.7215C48.8946%2039.7215%2050.1509%2040.9826%2050.1509%2042.5333V66.8178C50.1509%2071.7033%2047.0929%2076.1479%2042.5422%2077.8783C41.5388%2078.2597%2040.875%2079.2244%2040.875%2080.3017V94.0243C40.875%2095.4554%2042.0302%2096.6156%2043.4558%2096.6156C44.8814%2096.6156%2046.0365%2095.4554%2046.0365%2094.0243V81.9846C51.6505%2079.1135%2055.3125%2073.2298%2055.3125%2066.8178V42.5333C55.3125%2038.646%2052.5345%2035.3999%2048.8678%2034.6864L55.6968%2010.5235C56.895%206.2824%2054.4343%201.8533%2050.2108%200.650582ZM7.96347%2045.3451C6.41949%2045.3451%205.16318%2044.0839%205.16318%2042.5333V42.297V37.381C5.30426%2033.6551%2010.6241%2033.6582%2010.7638%2037.381V42.5333C10.7641%2044.0839%209.50745%2045.3451%207.96347%2045.3451ZM21.5259%2042.5333C21.3865%2046.2555%2016.0667%2046.26%2015.9256%2042.5333V37.381V31.5074C16.0646%2027.7855%2021.3848%2027.7807%2021.5259%2031.5074V42.5333ZM26.6874%2035.0509V31.5077C26.6874%2029.9167%2026.2201%2028.4341%2025.419%2027.1871L21.988%208.50575C21.7079%206.98101%2022.7151%205.51191%2024.2336%205.23067C25.7521%204.94977%2027.2152%205.96107%2027.4953%207.48581L32.4642%2034.5392H29.4877C28.5025%2034.5389%2027.559%2034.7206%2026.6874%2035.0509ZM50.7314%209.10867L43.5442%2034.5389H37.722L45.3435%207.57322C45.9636%205.96833%2047.1163%205.32257%2048.8021%205.63629C50.2872%206.0592%2051.153%207.6171%2050.7314%209.10867Z'%20fill='black'/%3e%3c/svg%3e",g="data:image/svg+xml,%3csvg%20width='57'%20height='101'%20viewBox='0%200%2057%20101'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M44.2222%20124.952V56.8755C49.7385%2054.8116%2053.6618%2049.5449%2053.6618%2043.3701V18.8099H2.62798V43.3701C2.62798%2049.5449%206.55134%2054.8116%2012.0677%2056.8755V124.952H44.2222Z'%20fill='%23FFCAB9'/%3e%3cpath%20d='M8.10367%2024.4585C5.07919%2024.4585%202.6276%2022.0357%202.6276%2019.0467V13.8862C2.6276%2010.8972%205.07919%208.47443%208.10367%208.47443C11.1282%208.47443%2013.5797%2010.8972%2013.5797%2013.8862V19.0467C13.5797%2022.0357%2011.1282%2024.4585%208.10367%2024.4585Z'%20fill='%23FABBA7'/%3e%3cpath%20d='M19.0558%2024.4585C16.0313%2024.4585%2013.5798%2022.0357%2013.5798%2019.0468V8.00314C13.5798%205.01417%2016.0313%202.59137%2019.0558%202.59137C22.0803%202.59137%2024.5319%205.01417%2024.5319%208.00314V19.0468C24.5319%2022.0357%2022.0803%2024.4585%2019.0558%2024.4585Z'%20fill='%23FABBA7'/%3e%3cpath%20d='M30.0079%2024.4585C26.9834%2024.4585%2024.5318%2022.0357%2024.5318%2019.0468V8.00314C24.5318%205.01417%2026.9834%202.59137%2030.0079%202.59137C33.0323%202.59137%2035.4839%205.01417%2035.4839%208.00314V19.0468C35.4839%2022.0357%2033.032%2024.4585%2030.0079%2024.4585Z'%20fill='%23FABBA7'/%3e%3cpath%20d='M40.96%2024.4585C37.9355%2024.4585%2035.4839%2022.0357%2035.4839%2019.0468V8.00314C35.4839%205.01417%2037.9355%202.59137%2040.96%202.59137C43.9845%202.59137%2046.4361%205.01417%2046.4361%208.00314V19.0468C46.4361%2022.0357%2043.9842%2024.4585%2040.96%2024.4585Z'%20fill='%23FABBA7'/%3e%3cpath%20d='M53.6624%2043.3702V19.0467C53.6624%2016.0577%2051.2108%2013.6349%2048.1863%2013.6349H30.0079C26.9834%2013.6349%2024.5318%2016.0577%2024.5318%2019.0467C24.5318%2022.0356%2026.9834%2024.4584%2030.0079%2024.4584H42.7102V32.5591C37.6372%2033.4876%2032.6181%2038.2173%2032.6181%2044.8593'%20fill='%23FFCAB9'/%3e%3cpath%20d='M49.062%2011.0868V8.00302C49.0851%201.05925%2040.5688%20-2.57822%2035.4839%202.10783C32.527%20-0.686982%2027.488%20-0.68629%2024.5322%202.10783C19.9428%20-2.12903%2012.2736%200.394123%2011.1075%206.45196C5.96588%204.30395%20-0.116318%208.338%200.00169076%2013.8864V43.37C0.00169076%2049.7922%203.72826%2055.6854%209.44137%2058.5611L10.3711%20123.892C10.3711%20125.326%2011.5466%20126.488%2012.9974%20126.488C14.4482%20126.488%2015.6237%20125.326%2015.6237%20123.892L14.694%2056.8755C14.694%2055.7964%2014.0185%2054.8302%2012.9974%2054.4482C8.36599%2052.7154%205.25432%2048.2633%205.25432%2043.37V26.5413C8.0081%2027.6314%2011.5067%2026.9161%2013.5798%2024.9421C16.5366%2027.7369%2021.576%2027.7366%2024.5318%2024.9421C25.9749%2026.2523%2027.8981%2027.0541%2030.0079%2027.0541H40.0835V30.5916C34.8708%2032.4738%2029.9918%2037.6544%2029.9918%2044.8594C29.9918%2046.2928%2031.1673%2047.4549%2032.6181%2047.4549C34.0689%2047.4549%2035.2444%2046.2928%2035.2444%2044.8594C35.2444%2039.4723%2039.3373%2035.8161%2043.1885%2035.1112C44.4334%2034.8831%2045.3365%2033.8103%2045.3365%2032.559V24.4583C45.3365%2023.0249%2044.1609%2021.8628%2042.7101%2021.8628H30.0079C28.4366%2021.8628%2027.1581%2020.5994%2027.1581%2019.0466C27.1581%2017.4938%2028.4363%2016.2303%2030.0079%2016.2303H48.1862C49.7574%2016.2303%2051.0359%2017.4935%2051.0359%2019.0466V43.37C51.0359%2048.2633%2047.9239%2052.7151%2043.2928%2054.4482C42.2717%2054.8302%2041.5962%2055.7964%2041.5962%2056.8755L42.526%20123.892C42.526%20125.326%2043.7015%20126.488%2045.1523%20126.488C46.6031%20126.488%2047.7786%20125.326%2047.7786%20123.892L46.8489%2058.5611C52.562%2055.6854%2056.2886%2049.7922%2056.2886%2043.37V19.0466C56.2886%2014.9239%2053.1191%2011.5201%2049.062%2011.0868ZM40.9596%205.18675C42.5309%205.18675%2043.8093%206.44988%2043.8093%208.00302V11.0394H38.1102V8.00302C38.1102%206.45023%2039.3884%205.18675%2040.9596%205.18675ZM8.1037%2021.8628C6.53246%2021.8628%205.25397%2020.5997%205.25397%2019.0466V18.8099V13.8861C5.39755%2010.1541%2010.8109%2010.1573%2010.9531%2013.8861V19.0466C10.9534%2020.5997%209.67529%2021.8628%208.1037%2021.8628ZM19.0561%2021.8628C17.4849%2021.8628%2016.2061%2020.5997%2016.2061%2019.0466V13.8861V8.00302C16.3496%204.27141%2021.7634%204.27384%2021.9055%208.00302V19.0466C21.9055%2020.5997%2020.6274%2021.8628%2019.0561%2021.8628ZM27.1581%2011.5522V8.00335C27.3017%204.27141%2032.7151%204.27452%2032.8573%208.00335V11.0397H30.0075C29.0053%2011.0394%2028.0451%2011.2214%2027.1581%2011.5522Z'%20fill='black'/%3e%3c/svg%3e",v="data:image/svg+xml,%3csvg%20width='68'%20height='101'%20viewBox='0%200%2068%20101'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M61.5027%2036.7156C58.7963%2035.5022%2055.6269%2036.7308%2054.4236%2039.4596L47.1904%2056.3471H45.4748V45.5486V42.6082V15.5563C45.4748%2012.5699%2043.0739%2010.1486%2040.112%2010.1486C37.1501%2010.1486%2034.7492%2012.5696%2034.7492%2015.5563V7.96722C34.7492%204.98083%2032.3484%202.55948%2029.3864%202.55948C26.4249%202.55948%2024.0237%204.98048%2024.0237%207.96722V15.5563C24.0237%2012.5699%2021.6228%2010.1486%2018.6609%2010.1486C15.699%2010.1486%2013.2982%2012.5696%2013.2982%2015.5563V28.3512C13.2982%2025.3648%2010.8973%2022.9435%207.93538%2022.9435C4.97382%2022.9435%202.57262%2025.3645%202.57262%2028.3512V42.6082V42.8447V67.1502C2.57262%2073.3204%206.41483%2078.5833%2011.8174%2080.6457V126.395H43.3067V80.6453C47.3221%2079.1124%2050.474%2075.8106%2051.8286%2071.6834L51.8653%2071.6889L56.9901%2060.2568L64.2232%2043.8538C65.4272%2041.125%2064.2088%2037.9291%2061.5027%2036.7156Z'%20fill='%23FFCAB9'/%3e%3cpath%20d='M21.0323%2015.5563C21.0323%2014.1032%2021.6036%2012.7871%2022.5282%2011.8154C22.0992%2011.3644%2021.5934%2010.9909%2021.0323%2010.7112V15.5563Z'%20fill='%23FABBA7'/%3e%3cpath%20d='M12.7282%2078.2198C8.19226%2076.4883%205.14497%2072.0395%205.14497%2067.1501V60.3097C5.14497%2056.9564%200.000991821%2056.9564%200.000991821%2060.3097V67.1501C0.000991821%2073.5676%203.65047%2079.4564%209.24574%2082.3297V127.418C9.24574%20128.85%2010.397%20130.012%2011.8177%20130.012C13.2385%20130.012%2014.3897%20128.85%2014.3897%20127.418V80.6453C14.3897%2079.5674%2013.7282%2078.6016%2012.7282%2078.2198Z'%20fill='black'/%3e%3cpath%20d='M66.7299%2038.7859C65.9696%2036.791%2064.4841%2035.2141%2062.5479%2034.3458C58.597%2032.5749%2053.7956%2034.501%2052.0624%2038.4311L48.047%2047.8063V15.5563C48.1561%2010.0787%2042.344%206.05315%2037.3215%208.0661C36.7107%20-2.69337%2021.8827%20-2.68403%2021.4523%208.0661C16.4287%206.05453%2010.6184%2010.0784%2010.7271%2015.5566V20.8613C5.70693%2018.8501%20-0.109542%2022.8729%200.00156761%2028.3515V47.3419C0.00156761%2050.6952%205.14555%2050.6952%205.14555%2047.3419V28.3512C5.28889%2024.6196%2010.5872%2024.6265%2010.7271%2028.3512V46.3885C10.7271%2049.7418%2015.8711%2049.7418%2015.8711%2046.3885C15.8711%2036.1111%2015.8711%2025.8337%2015.8711%2015.5563C16.0086%2011.8344%2021.3107%2011.8233%2021.4523%2015.5563V40.7775C21.4523%2044.1307%2026.5963%2044.1307%2026.5963%2040.7775V7.9672C26.5963%206.41556%2027.848%205.15301%2029.3871%205.15301C30.9261%205.15301%2032.1778%206.41521%2032.1778%207.9672V40.7775C32.1778%2044.1307%2037.3218%2044.1307%2037.3218%2040.7775V15.5563C37.3218%2014.0047%2038.5738%2012.7421%2040.1129%2012.7421C41.652%2012.7421%2042.9037%2014.0043%2042.9037%2015.5563V53.8165C35.3119%2054.5008%2029.3716%2060.937%2029.3716%2068.6385C29.3716%2071.9918%2034.5156%2071.9918%2034.5156%2068.6385C34.5156%2061.3672%2041.0443%2058.6841%2047.1914%2058.941C48.2174%2058.941%2049.1458%2058.3258%2049.5528%2057.3759L56.775%2040.5136C57.6117%2039.0121%2058.8398%2038.5359%2060.4584%2039.0858C61.9477%2039.9295%2062.42%2041.1679%2061.8747%2042.8004C57.8182%2052%2049.4407%2070.8285%2049.4407%2070.8285C48.2548%2074.2261%2045.6218%2076.9894%2042.3975%2078.2201C41.3976%2078.6019%2040.736%2079.5674%2040.736%2080.6456V126.395C40.736%20127.827%2041.8873%20128.988%2043.308%20128.988C44.7288%20128.988%2045.88%20127.827%2045.88%20126.395V82.3256C49.703%2080.3441%2052.7627%2076.8425%2054.2541%2072.6596C58.3946%2063.4237%2062.4906%2054.1692%2066.5746%2044.9078C67.435%2042.955%2067.4905%2040.7809%2066.7299%2038.7859Z'%20fill='black'/%3e%3c/svg%3e";function _(){const t=document.createElement("div");t.className="logos",t.setAttribute("aria-hidden","true");const e=document.createElement("style");e.textContent=`
.logos {
    margin-top: auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: clamp(24px, 8vw, 100px);
}

@media (min-width: 1278px) {
.logos {
    margin-top: auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 100px;
}
}  
  `,t.innerHTML=`
    <img src="${h}" alt="" class="logo" />
    <img src="${g}" alt="" class="logo" />
    <img src="${v}" alt="" class="logo" />
  `,t.prepend(e);function n(){e.remove(),t.remove()}return{el:t,destroy:n}}function Z(t){t.innerHTML="";const e=k();t.appendChild(e);const n=e.querySelector("#slot-start");if(n){const s=C({text:"Empezar",id:"btn-start"},()=>{location.hash="#/start"});n.replaceWith(s.el)}const o=e.querySelector("#slot-logos");if(o){const s=_();o.replaceWith(s.el)}}function q(){const t=document.createElement("style");t.textContent=`
.main {
  display: flex;
  justify-content: center;
}

.main__container {
  min-height: 100dvh;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main__title {
  font-family: Inter;
  color: rgba(0, 0, 0, 1);
  font-size: 40px;
  margin-top: 120px;
}
 
    `;const e=document.createElement("div");return e.innerHTML=`
    <main class="main">
        <div class="main__container">
        <h1 class="main__title">
          Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los
          3 segundos.
        </h1>

        <div id="slot-start"></div>

        <div id="slot-logos"></div>
        </div>
    </main>
    `,e.prepend(t),e}function I(t){t.innerHTML="";const e=q();t.appendChild(e);const n=e.querySelector("#slot-start");if(n){const s=C({text:"¡Jugar!",id:"btn-start"},()=>{location.hash="#/play"});n.replaceWith(s.el)}const o=e.querySelector("#slot-logos");if(o){const s=_();o.replaceWith(s.el)}}function j(){const t=document.createElement("style");t.textContent=`
.main {
  display: flex;
  justify-content: center;
}

.main__content {
  width: min(90%, 420px);
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
}



.main__logos {
  margin-top: auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: clamp(24px, 8vw, 100px);
}

.logo {
  height: clamp(120px, 28vw, 180px);
  width: auto;
  flex: 0 0 auto;
  display: block;
}
    `;const e=document.createElement("div");return e.innerHTML=`
    <main class="main">
      <div class="main__content">
        <div id="slot-count"></div>

        <div id="slot-logos"></div>
      </div>
    </main>
    `,e.prepend(t),e}function T(){let t=null;const e=document.createElement("div");e.className="move logos";const n=document.createElement("style");n.textContent=`
.logos {
    margin-top: auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: clamp(24px, 8vw, 100px);
}

@media (min-width: 1278px) {
.logos {
    margin-top: auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 100px;
}
}  

.move.logo{
    height: 160px;
    width: auto;
    flex: 0 0 auto;
    cursor: pointer;
    transition: transform .15s ease, filter .15s ease, opacity .15s ease;
    transform-origin: center bottom;
  }

.moves.has-selected .move{
filter: grayscale(1);
opacity: .5;
transform: scale(0.9);
}

.moves.has-selected .move.is-selected{
filter: none;
opacity: 1;
transform: scale(1.1);
}
  `,e.innerHTML=`
  <div class="moves logos">
    <img data-move="tijera" src="${h}" alt="" class="logo move" />
    <img data-move="piedra" src="${g}" alt="" class="logo move" />
    <img data-move="papel" src="${v}" alt="" class="logo move" />
    </div>
  `,e.prepend(n);const o=e.querySelector(".moves");o?.addEventListener("click",r=>{const l=r.target.closest(".move");if(!l)return;o.querySelectorAll(".move.is-selected").forEach(m=>m.classList.remove("is-selected")),l?.classList.add("is-selected"),o.classList.add("has-selected");const c=l.dataset.move;t=c,o.dispatchEvent(new CustomEvent("select",{detail:c,bubbles:!0}))});function s(r){o.classList.toggle("disabled",r)}function i(){return t}function a(){n.remove(),e.remove()}return{el:e,setDisabled:s,getSelected:i,destroy:a}}function N(){const t=document.createElement("div");t.className="count",t.setAttribute("role","timer"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic","true");let e=null;const n=document.createElement("style");n.textContent=`
.count {
  margin-top: clamp(40px, 12vh, 120px);
}

.count-svg{ width: clamp(180px, 55vw, 320px); height:auto; display:block; }
  
    `,t.innerHTML=`
<svg viewBox="0 0 200 200" class="count-svg">
  <!-- fondo (gris) -->
  <circle
    cx="100" cy="100" r="80"
    fill="none" stroke="#e6e6e6" stroke-width="20" />

  <!-- progreso (negro) -->
  <circle
    id="arc"
    cx="100" cy="100" r="80"
    fill="none" stroke="#000" stroke-width="20"
    stroke-linecap="round"
    transform="rotate(-90 100 100)"
 />

  <!-- número -->
  <text
    id="count"
    x="100" y="100"
    text-anchor="middle" dominant-baseline="middle"
    font-family="Inter, system-ui, sans-serif"
    font-size="72" font-weight="700" fill="#000">
    3
  </text>
</svg>


    `,t.prepend(n);const o=t.querySelector(".count-svg"),s=o?.querySelector("#arc"),i=o.querySelector("#count"),a=s.r.baseVal.value,r=2*Math.PI*a;s.style.strokeDasharray=String(r);let l=0,c=3e3;function m(d){const p=d-l,V=Math.min(p/c,1),F=Math.max(c-p,0);s.style.strokeDashoffset=String(r*(1-V)),i.textContent=String(Math.ceil(F/1e3))}function y(d){if(m(d),d-l>=c){s.style.strokeDashoffset="0",i.textContent="0",e&&cancelAnimationFrame(e),e=null,t.dispatchEvent(new CustomEvent("done",{bubbles:!0}));return}e=requestAnimationFrame(y)}function B(d=3e3){c=d,s.style.strokeDasharray=String(r),s.style.strokeDashoffset=String(r),i.textContent=String(Math.ceil(d/1e3)),l=performance.now(),e&&cancelAnimationFrame(e),e=requestAnimationFrame(y)}function x(){e&&(cancelAnimationFrame(e),e=null)}function A(d=c){x(),c=d,s.style.strokeDasharray=String(r),s.style.strokeDashoffset=String(r),i.textContent=String(Math.ceil(d/1e3))}function H(){n.remove(),t.remove()}return{el:t,start:B,stop:x,reset:A,destroy:H}}function P(t,e){const n={piedra:"tijera",tijera:"papel",papel:"piedra"};return t===e?"tie":n[t]===e?"user":"cpu"}const f="score",u={data:{score:{user:0,cpu:0},current:{}},lastRound:void 0,listeners:[],init(){const t=localStorage.getItem(f);if(!t){this.data={score:{user:0,cpu:0},current:{}};return}try{const e=JSON.parse(t),n=Number(e?.user??e?.score?.user??0),o=Number(e?.cpu??e?.score?.cpu??0);this.data={score:{user:n,cpu:o},current:{}}}catch{this.data={score:{user:0,cpu:0},current:{}}}},getState(){return this.data},setState(t){this.data=t,localStorage.setItem(f,JSON.stringify(this.data.score));for(const e of this.listeners)e()},subscribe(t){return this.listeners.push(t),()=>{const e=this.listeners.indexOf(t);e!==-1&&this.listeners.splice(e,1)}},getScore(){return this.data.score},getCurrent(){return this.data.current},setUserMove(t){this.data.current.userMove=t;for(const e of this.listeners)e()},setCpuMove(t){this.data.current.cpuMove=t;for(const e of this.listeners)e()},setWinner(t){this.data.current.winner=t;for(const e of this.listeners)e()},clearCurrent(){this.data.current={};for(const t of this.listeners)t()},commitRound(){const{current:t,score:e}=this.data,{userMove:n,cpuMove:o,winner:s}=t;n&&o&&s?this.lastRound={user:n,cpu:o,winner:s}:this.lastRound=void 0,s==="user"?e.user++:s==="cpu"&&e.cpu++,localStorage.setItem(f,JSON.stringify(e)),this.data.current={};for(const i of this.listeners)i()},getLastRound(){return this.lastRound}};function W(t){t.innerHTML="";const e=j();t.appendChild(e);const n=N(),o=T();e.querySelector("#slot-count ")?.replaceWith(n.el),e.querySelector("#slot-logos")?.replaceWith(o.el);let a=null;const r=["piedra","papel","tijera"];function l(){const c=Math.floor(Math.random()*r.length);return r[c]}o.el.addEventListener("select",c=>{a=c.detail,u.setUserMove(a),console.log(a)}),n.reset(3e3),n.start(3e3),n.el.addEventListener("done",()=>{o.setDisabled(!0);const c=l();if(u.setCpuMove(c),console.log("CPU eligio: ",c),!a){location.hash="#/start";return}const m=P(a,c);u.setWinner(m),u.commitRound(),console.log("Ganador: ",m),location.hash="#/wachMove"})}function R(){const t=document.createElement("style");t.textContent=`
.main{
  display: flex;
  justify-content: center;
}

.main__container {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  align-items: center;
  justify-content: space-between;
}

   
    `;const e=document.createElement("div");return e.innerHTML=`
    <main class="main">
      <div class="main__container">
        <div id="slot-cpu"></div>

        <div id="slot-user"></div>
      </div>
    </main>    
    `,e.prepend(t),e}function w(t){const e=document.createElement("div");e.className=`move-icon ${t.role??"user"}`;const n=document.createElement("style");n.textContent=`
  .move-icon{
  display: flex;
  flex-direction: column;
  align-items: center;
  }

  .move-icon.cpu .icon {
  transform: rotate(180deg);
}

.move-icon .icon {
  width: auto;
  height: clamp(160px, 50vh, 280px);
  display: block;
} 
  `;const o={piedra:g,papel:v,tijera:h};e.innerHTML=`
  <img class="icon" alt="${t.move}" src="${o[t.move]}"/>
  `;function s(r){const l=e.querySelector(".icon");l.src=o[r]}function i(r){e.classList.remove("user","cpu"),e.classList.add(r)}function a(){n.remove(),e.remove()}return e.prepend(n),{el:e,setMove:s,setRole:i,destroy:a}}function O(){const t=JSON.parse(localStorage.getItem("score")||'{"user":0, "cpu":0}'),e=document.createElement("style");e.textContent=`
  .score-box {
  border: 10px solid black;
  border-radius: 10px;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.score-box__title {
  font-family: Inter;
  font-size: 30px;
  margin: 5px;
}

.score-box__user, .score-box__cpu {
  font-family: Inter;
  align-self: flex-end;
  font-weight: 600;
  font-size: 30px;
  margin: 5px;
}

  `;const n=document.createElement("div");return n.className="score-component",n.innerHTML=`
  <div class="score-box">
          <h1 class="score-box__title">Score</h1>
          <p class="score-box__user">Vos: ${t.user}</p>
          <p class="score-box__cpu">Maquina: ${t.cpu}</p>
        </div>  
  `,n.prepend(e),n}function $(){const t=document.createElement("style");t.textContent=`
.main {
  display: flex;
  justify-content: center;
}

.main__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  gap: 16px;
}    
    
    `;const e=document.createElement("div");return e.innerHTML=`
 <main class="main">
      <div class="main__container">

      <div id="slot-star"></div>
        
      <div id="slot-score"></div>

        <div id="slot-start"></div>
      </div>
    </main>   
    `,e.prepend(t),e}const D="/assets/starGanaste-oUVkQ_YI.png",z="/assets/starPerdiste-CBVTymL7.png",U={win:D,lose:z};function G(t){const e=new Image;e.src=U[t],e.alt=t==="win"?"Ganaste":"Perdiste",e.className="img-star";const n=document.createElement("style");n.textContent=`
    .img-star{
display:block;
      width:160px;
      height:auto;
      margin-bottom:20px;
}   
    `;const o=document.createElement("div");return o.append(n,e),o}function E(t){t.innerHTML="";const e=$(),n=e.querySelector("#slot-star");if(n){const a=(u.getLastRound()?.winner??"").trim().toLowerCase();let r;a==="cpu"?r="lose":r="win";const l=G(r);n.replaceWith(l)}const o=e.querySelector("#slot-score");if(o){const i=O();o.replaceWith(i)}else console.warn("No encontre #slot-score");const s=e.querySelector("#slot-start");if(s){const i=C({text:"Volver a jugar",id:"btn-start"},()=>{location.hash="#/play"});s.replaceWith(i.el)}t.replaceChildren(e)}let b=!1;function J(t){t.innerHTML="";const e=R();t.appendChild(e);const n=u.getLastRound?.();if(!n){location.hash="#/play";return}const o=w({move:n.cpu,role:"cpu"}),s=w({move:n.user,role:"user"}),i=e.querySelector("#slot-cpu"),a=e.querySelector("#slot-user");i?.replaceWith(o.el),a?.replaceWith(s.el);const r=setTimeout(()=>{K()},3200),l=()=>clearTimeout(r);window.addEventListener("hashchange",l,{once:!0})}function K(){if(!b){const a=document.createElement("style");a.textContent=`
      #result-overlay{
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: grid;
        place-items: center;
        background: rgba(0,0,0,.25);
        backdrop-filter: blur(2px);
        background: rgba(var(--tint, 0,0,0), 0.25); /* <- usa el tinte */
      }
        #result-overlay.is-win  { --tint: 88,193,114; }  /* #58c172 */
  #result-overlay.is-lose { --tint: 217,92,92; }   /* #d95c5c */

      #result-overlay .result-shell{
        /* contenedor al que le montamos ResultPage */
        transform: scale(.94);
        animation: popIn .18s ease-out forwards;
      }
      @keyframes popIn { to { transform: scale(1); } }
    `,document.head.appendChild(a),b=!0}let t=document.getElementById("result-overlay");t&&t.remove(),t=document.createElement("div"),t.id="result-overlay";const n=(u.getLastRound?.()?.winner??"").trim().toLowerCase(),o=n==="cpu"?"lose":"win";t.classList.add(`is-${o}`);const s=document.createElement("div");s.className="result-shell",t.appendChild(s),document.body.appendChild(t),E(s);const i=()=>t?.remove();window.addEventListener("hashchange",i,{once:!0})}const Y={"#/":Z,"#/start":I,"#/play":W,"#/wachMove":J,"#/result":E},M=document.getElementById("app");let L;function S(){L?.();const t=Y[location.hash||"#/"];if(!t)return M.textContent="404";const e=t(M);typeof e=="function"&&(L=e)}function Q(){window.addEventListener("hashchange",S),S()}u.init();Q();
