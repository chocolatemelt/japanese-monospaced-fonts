document.addEventListener('DOMContentLoaded', function() {
  // Example Text
  var exampleTextHtml = 'abcdefghijklmnopqrstuvwxyz&nbsp;12345&nbsp;&nbsp;ab<b>cd</b>ef<i>gh</i>ijklm<b>no</b>pq<i>rs</i>tuvwx<b>yz</b>&nbsp;1<i>23</i>45<br>ABCDEFGHIJKLMNOPQRSTUVWXYZ&nbsp;67890&nbsp;&nbsp;AB<b>CD</b>EF<i>GH</i>IJKLM<b>NO</b>PQ<i>RS</i>TUVWX<b>YZ</b>&nbsp;6<i>78</i>90<br>!?#$%&amp;&apos;&quot;@`^()[]{}&lt;&gt;+*-=_/\\|~:;.,&nbsp;&nbsp;!?<b>#$</b>%&amp;<i>&apos;&quot;</i>@`^()<b>[]</b>{}<i>&lt;&gt;</i>+*-=_<b>/\\</b>|~<i>:;</i>.,<br>あいうえお&nbsp;かきくけこ&nbsp;日本語等幅　あ<b>い</b>う<i>え</i>お&nbsp;か<b>き</b>く<i>け</i>こ&nbsp;日<b>本</b>語<i>等</i>幅<br>アイウエオ&nbsp;カキクケコ&nbsp;日本語等幅　ア<b>イ</b>ウ<i>エ</i>オ&nbsp;カ<b>キ</b>ク<i>ケ</i>コ&nbsp;日<b>本</b>語<i>等</i>幅<br>はひふへほ&nbsp;ばびぶべぼ&nbsp;ぱぴぷぺぽ　は<b>ひ</b>ふ<i>へ</i>ほ&nbsp;ば<b>び</b>ぶ<i>べ</i>ぼ&nbsp;ぱ<b>ぴ</b>ぷ<i>ぺ</i>ぽ<br>ハヒフヘホ&nbsp;バビブベボ&nbsp;パピプペポ　ハ<b>ヒ</b>フ<i>ヘ</i>ホ&nbsp;バ<b>ビ</b>ブ<i>ベ</i>ボ&nbsp;パ<b>ピ</b>プ<i>ペ</i>ポ';
  Array.prototype.forEach.call(document.querySelectorAll('.example-text'), function(element) {
    element.innerHTML = exampleTextHtml;
  });
  
  // Example Styles Code
  var exampleStylesElement = document.getElementById('example-styles');
  if(!exampleStylesElement) return;
  var exampleStyles = exampleStylesElement.innerHTML.trim();
  var exampleStylesCodeElement = document.getElementById('example-styles-code');
  if(!exampleStylesCodeElement) return;
  exampleStylesCodeElement.innerHTML = exampleStyles;
});
