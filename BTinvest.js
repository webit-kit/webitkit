var adddiv = document.getElementById("adddiv")

var text ='<div class="container paddingtopl" id="adddiv">      <div class="row" >          <div class="well">      <a href="first.html">        <div class="col align-self-start tablediv">          <table>            <thead>              <tr id="trimg">                <div class="cont">                  <img src="https://s27389.pcdn.co/wp-content/uploads/2017/05/AdobeStock_51875542.jpeg" class="opac" width="400px" class="p-0">                  <div class="centered">                    <h3>USDT, USDC</h3>                    <p class="font-weight-normal">Use stablecoins to secure a stable asset portfolio</p>                  </div>                </div>              </tr>            </thead>            <tbody>              <tr><td>&nbsp;</td></tr>              <tr>                <td>Target Return</td>                <td> Asset type</td>                <td>Period</td>              </tr>              <tr class="font-weight-bold">                <td>30%+</td>                <td>USDT/USDC</td>                <td>0-12 Months</td>              </tr>              <tr><td>&nbsp;</td></tr>            </tbody>          </table>        </div>      </a>      <div class="col align-self-center short ">      </div>      <a href="second.html">        <div class="col align-self-end tablediv ">          <table>            <thead>              <tr id="trimg">                <div class="cont">                  <img src="https://www.varchev.com/wp-content/uploads/2020/06/Quadruple-witching-1.jpg" class="opac p-0">                  <div class="centered">                    <h3>ETH</h3>                    <p class="font-weight-normal">Invest in ETH to earn alpha from Ethereums value growth</p>                  </div>                </div>              </tr>            </thead>            <tbody>              <tr><td>&nbsp;</td></tr>              <tr>                <td>Target Return</td>                <td> Asset type</td>                <td>Period</td>              </tr>              <tr class="font-weight-bold">                <td>20%+α</td>                <td>ETH</td>                <td>0-12 Months</td>              </tr>              <tr><td>&nbsp;</td></tr>            </tbody>          </table>        </div>      </a>     </div>    </div>    </div>'



var tuxt ='<div class="container paddingtopl" id="adddiv">      <div class="row" >               <a href="first.html">        <div class="col align-self-start tablediv">          <table>            <thead>              <tr id="trimg">                <div class="cont">                  <img src="https://s27389.pcdn.co/wp-content/uploads/2017/05/AdobeStock_51875542.jpeg" class="opac" width="400px" class="p-0">                  <div class="centered">                    <h3>USDT, USDC</h3>                    <p class="font-weight-normal">Use stablecoins to secure a stable asset portfolio</p>                  </div>                </div>              </tr>            </thead>            <tbody>              <tr><td>&nbsp;</td></tr>              <tr>                <td>Target Return</td>                <td> Asset type</td>                <td>Period</td>              </tr>              <tr class="font-weight-bold">                <td>30%+</td>                <td>USDT/USDC</td>                <td>0-12 Months</td>              </tr>              <tr><td>&nbsp;</td></tr>            </tbody>          </table>        </div>      </a>      <div class="col align-self-center short ">      </div>      <a href="second.html">        <div class="col align-self-end tablediv ">          <table>            <thead>              <tr id="trimg">                <div class="cont">                  <img src="https://www.varchev.com/wp-content/uploads/2020/06/Quadruple-witching-1.jpg" class="opac p-0">                  <div class="centered">                    <h3>ETH</h3>                    <p class="font-weight-normal">Invest in ETH to earn alpha from Ethereums value growth</p>                  </div>                </div>              </tr>            </thead>            <tbody>              <tr><td>&nbsp;</td></tr>              <tr>                <td>Target Return</td>                <td> Asset type</td>                <td>Period</td>              </tr>              <tr class="font-weight-bold">                <td>20%+α</td>                <td>ETH</td>                <td>0-12 Months</td>              </tr>              <tr><td>&nbsp;</td></tr>            </tbody>          </table>        </div>      </a>     </div>        </div>'
if (window.innerWidth < 768)
{
    adddiv.innerHTML = text;
}
window.addEventListener('resize', function(){
   if (innerWidth < 768)
   {
       textold();
   }
   else 
   {
       textnew();
   }
});
function textold (){
    adddiv.innerHTML = text;
}
function textnew()
{
    adddiv.innerHTML = tuxt;
}
