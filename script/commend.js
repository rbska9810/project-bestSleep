/* commend */

let mettressOption = document.getElementById('mettress-or');
let springOption = document.getElementById('spring-or');
let hardOption = document.getElementById('hard-or');
let priceOption = document.getElementById('price-or');
/* result */
let result = document.querySelectorAll('.result');

/* 옵션 바꾸기 */
mettressOption.addEventListener('change', function () {
  /* 선택한 값 */
  //selectedIndex = 순서를 나타냄
  //옵션에서 선택된 것의 순서를 찾고 그 순번째의 텍스트를 불러옴
  let mettressResult = mettressOption.options[mettressOption.selectedIndex].text;

  if (mettressResult == '매트리스') {
    springOption.innerHTML =
      `
    <option value="-1" selected disable>스프링 / 폼</option>
    <option>스프링 매트리스</option>
    <option>폼 매트리스</option>
    `;
    hardOption.innerHTML =
      `
    <option value="-1" selected disable>단단함 정도</option>
    <option>하드</option>
    <option>미디엄</option>
    <option>소프트</option>
    `;
    priceOption.innerHTML =
      `
    <option value="-1" selected disable>가격</option>
    <option>10-30만원대</option>
    <option>31-50만원대</option>
    <option>51-100만원대</option>
    `;
    result[0].innerText = mettressResult;
  } else if (mettressResult == '토퍼') {
    springOption.innerHTML =
      `
    <option value="-1" selected disable>스프링 / 폼</option>
    <option>스프링 토퍼</option>
    <option>폼 토퍼</option>
    `;
    hardOption.innerHTML =
      `
    <option value="-1" selected disable>단단함 정도</option>
    <option>하드</option>
    <option>미디엄</option>
    <option>소프트</option>
    `;
    priceOption.innerHTML =
      `
    <option value="-1" selected disable>가격</option>
    <option>10-30만원대</option>
    <option>31-50만원대</option>
    <option>51-100만원대</option>
    `;
    result[0].innerText = mettressResult;
  }


  springOption.addEventListener('change', function () {
    /* 선택한 값 */
    let springResult = springOption.options[springOption.selectedIndex].text;
    if (springResult == '스프링 / 폼') {
      result[1].innerText = '옵션을 선택해주세요.';
    } else {
      result[1].innerText = springResult;
    }
    resultText();
  })
  hardOption.addEventListener('change', function () {
    /* 선택한 값 */
    let hardResult = hardOption.options[hardOption.selectedIndex].text;
    if (hardResult == '단단함 정도') {
      result[2].innerText = '옵션을 선택해주세요.';
    } else {
      result[2].innerText = hardResult;
    }
    resultText();
  })
  priceOption.addEventListener('change', function () {
    /* 선택한 값 */
    let priceResult = priceOption.options[priceOption.selectedIndex].text;
    if (priceResult == '가격') {
      result[3].innerText = '옵션을 선택해주세요.';
    } else {
      result[3].innerText = priceResult;
    }
    resultText();
  })
})
function resultText(){
  /* 옵션을 전부 선택 하면 추천받기 버튼에 배경색이 바뀜 */
if (
  result[0].innerText != '옵션을 선택해주세요.' &&
  result[1].innerText != '옵션을 선택해주세요.' &&
  result[2].innerText != '옵션을 선택해주세요.' &&
  result[3].innerText != '옵션을 선택해주세요.'
) {
  commendBtn.classList.add('on');
  resetBtn.classList.remove('on');
} else {
  commendBtn.classList.remove('on');
}
}

/* 입력된 값으로 결과값 만들기 */
//매트리스 결과 값
let resultBoxText = document.querySelector('.result-bottom>h5');
let resultItem = document.querySelectorAll('.result-item');
let resultItemTitle = document.querySelectorAll('.result-item>h5');
let resultItemCon = document.querySelectorAll('.result-item-content');

function resultOptionMettress() {
  if (result[1].innerText === '스프링 매트리스') {

    if (result[2].innerText === '하드') {
      if (result[3].innerText === '10-30만원대') {
        resultItemTitle[0].innerText = '[퀵슬립] Q0 롤팩 매트리스';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">탄탄</a>
        <a href="#none">20만원대~</a>
        `;
        resultItemTitle[1].innerText = '[베스트슬립] M1 매트리스';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">매우탄탄</a>
        <a href="#none">30만원대~</a>
        `;
        resultItemTitle[2].innerText = '[베스트슬립] M2 매트리스';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당</a>
        <a href="#none">30만원대~</a>
        `;
      } else if (result[3].innerText === '31-50만원대') {
        resultItemTitle[0].innerText = '[엘라비아] C4 하드브라운';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">탄탄</a>
        <a href="#none">40만원대~</a>
        `;
        resultItemTitle[1].innerText = '[엘라비아] G3 하드카키 매트리스';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">50만원대~</a>
        `;
        resultItemTitle[2].innerText = '[베스트슬립] M3 매트리스';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">매우탄탄</a>
        <a href="#none">40만원대~</a>
        `;
      } else if (result[3].innerText === '51-100만원대') {
        resultItemTitle[0].innerText = '[엘라비아] G5 하드카키';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">70만원대~</a>
        `;
        resultItemTitle[1].innerText = '[퀵슬립] 더 매트리스 하드브라운';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">탄탄</a>
        <a href="#none">50만원대~</a>
        `;
        resultItemTitle[2].innerText = '[베스트슬립] L2 브라운 양면';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당탄탄(하면)</a>
        <a href="#none">90만원대~</a>
        `;
      } else {
        resultItem.forEach(function(item){
          item.style.display = 'none';
        });
        resultBoxText.style.display = 'block';
        resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
      }
    } else if (result[2].innerText === '미디엄') {
      if (result[3].innerText === '10-30만원대') {
        resultItemTitle[0].innerText = '[롤링컴포트] TF3 폴딩 매트리스';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">20만원대~</a>
        `;
        resultItemTitle[1].innerText = '[롤링컴포트] RC2 독립스프링';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">20만원대~</a>
        `;
        resultItem[2].style.display = 'none'
      } else if (result[3].innerText === '31-50만원대') {
        resultItemTitle[0].innerText = '[엘라비아] FM5 폴딩 매트리스';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">30만원대~</a>
        `;
        resultItemTitle[1].innerText = '[엘라비아] C2 소프트그레이';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">40만원대~</a>
        `;
        resultItemTitle[2].innerText = '[퀵슬립] Q4 롤팩 매트리스';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">30만원대~</a>
        `;
      } else if (result[3].innerText === '51-100만원대') {
        resultItemTitle[0].innerText = '[베스트슬립] M5 골든 메달리스트';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">60만원대~</a>
        `;
        resultItemTitle[1].innerText = '[엘라비아] P7 소프트그레이';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">90만원대~</a>
        `;
        resultItemTitle[2].innerText = '[퀵슬립] Q8 롤팩 하이브리드';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당</a>
        <a href="#none">60만원대~</a>
        `;
      } else {
        resultItem.forEach(function(item){
          item.style.display = 'none';
        });
        resultBoxText.style.display = 'block';
        resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
      }
    } else if (result[2].innerText === '소프트') {
      if (result[3].innerText === '10-30만원대') {
        resultItemTitle[0].innerText = '[퀵슬립] Q1 롤팩 매트리스';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">20만원대~</a>
        `;
        resultItem[1].style.display = 'none';
        resultItem[2].style.display = 'none';
      } else if (result[3].innerText === '31-50만원대') {
        resultItemTitle[0].innerText = '[퀵슬립] Q7 롤팩 매트리스';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">40만원대~</a>
        `;
        resultItemTitle[1].innerText = '[퀵슬립] Q5 롤팩 매트리스';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">30만원대~</a>
        `;
        resultItemTitle[2].innerText = '[퀵슬립] Q3 롤팩 매트리스';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">30만원대~</a>
        `;
      } else if (result[3].innerText === '51-100만원대') {
        resultItemTitle[0].innerText = '[베스트슬립] L3 양면 매트리스';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">90만원대~</a>
        `;
        resultItem[1].style.display = 'none';
        resultItem[2].style.display = 'none';
      } else {
        resultItem.forEach(function(item){
          item.style.display = 'none';
        });
        resultBoxText.style.display = 'block';
        resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
      }
    } else {
      resultItem.forEach(function(item){
        item.style.display = 'none';
      });
      resultBoxText.style.display = 'block';
      resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
    }
  } else if (result[1].innerText === '폼 매트리스') {
    if (result[2].innerText === '하드') {
      if (result[3].innerText === '10-30만원대') {
        resultItemTitle[0].innerText = '[엘라비아] 페어페딕3 하드카키';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">24만원대~</a>
        `;
        resultItem[1].style.display = 'none';
        resultItem[2].style.display = 'none';
      } else if (result[3].innerText === '31-50만원대') {
        resultItemTitle[0].innerText = '[엘라비아] 페어페딕5 하드카키';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">33만원대~</a>
        `;
        resultItemTitle[1].innerText = '[엘라비아] 페어페딕7 하드카키';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">44만원대~</a>
        `;
        resultItemTitle[2].innerText = '[엘라비아] 엘라텍스5 하드카키';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">47만원대~</a>
        `;
      } else if (result[3].innerText === '51-100만원대') {
        resultItemTitle[0].innerText = '[엘라비아] 페어페딕9 하드카키';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">77만원대~</a>
        `;
        resultItemTitle[1].innerText = '[퀵슬립] Q1000 하드';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">89만원대~</a>
        `;
        resultItemTitle[2].innerText = '[베스트슬립] 엘라페딕3-23 하드';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">탄탄</a>
        <a href="#none">90만원대~</a>
        `;
      } else {
        resultItem.forEach(function(item){
          item.style.display = 'none';
        });
        resultBoxText.style.display = 'block';
        resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
      }
    } else if (result[2].innerText === '미디엄') {
      if (result[3].innerText === '10-30만원대') {
        resultItemTitle[0].innerText = '[롤링컴포트] RC3 양면 매트리스';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당</a>
        <a href="#none">18만원대~</a>
        `;
        resultItem[1].style.display = 'none';
        resultItem[2].style.display = 'none';
      } else if (result[3].innerText === '31-50만원대') {
        resultItemTitle[0].innerText = '[퀵슬립] V100 폼 매트리스';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">푹신</a>
        <a href="#none">47만원대~</a>
        `;
        resultItemTitle[1].innerText = '[퀵슬립] V300 롤팩 매트리스';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">푹신</a>
        <a href="#none">43만원대~</a>
        `;
        resultItemTitle[2].innerText = '[퀵슬립] 엘라텍스3 소프트그레이';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">37만원대~</a>
        `;
      } else if (result[3].innerText === '51-100만원대') {
        resultItemTitle[0].innerText = '[베스트슬립] 엘라페딕3-23 미디엄';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">90만원대~</a>
        `;
        resultItemTitle[1].innerText = '[베스트슬립] 엘라페딕4-26 미디엄';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">100만원대~</a>
        `;
        resultItemTitle[2].innerText = '[퀵슬립] Q1000 미디엄';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당</a>
        <a href="#none">89만원대~</a>
        `;
      } else {
        resultItem.forEach(function(item){
          item.style.display = 'none';
        });
        resultBoxText.style.display = 'block';
        resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
      }
    } else if (result[2].innerText === '소프트') {
      if (result[3].innerText === '10-30만원대') {
        resultItemTitle[0].innerText = '[엘라비아] 페어페딕3 소프트그레이';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">24만원대~</a>
        `;
        resultItem[1].style.display = 'none';
        resultItem[2].style.display = 'none';
      } else if (result[3].innerText === '31-50만원대') {
        resultItemTitle[0].innerText = '[엘라비아] 페어페딕5 소프트그레이';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">33만원대~</a>
        `;
        resultItemTitle[1].innerText = '[엘라비아] 페어페딕7 소프트그레이';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">44만원대~</a>
        `;
        resultItemTitle[2].innerText = '[엘라비아] 엘라텍스5 소프트그레이';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">47만원대~</a>
        `;
      } else if (result[3].innerText === '51-100만원대') {
        resultItemTitle[0].innerText = '[베스트슬립] 젤라텍스 2-22';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">75만원대~</a>
        `;
        resultItemTitle[1].innerText = '[엘라비아] 페어페딕9 소프트그레이';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">77만원대~</a>
        `;
        resultItemTitle[2].innerText = '[퀵슬립] Q1000 소프트';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">89만원대~</a>
        `;
      } else {
        resultItem.forEach(function(item){
          item.style.display = 'none';
        });
        resultBoxText.style.display = 'block';
        resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
      }
    } else {
      resultItem.forEach(function(item){
        item.style.display = 'none';
      });
      resultBoxText.style.display = 'block';
      resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
    }
  } else {
    resultItem.forEach(function(item){
      item.style.display = 'none';
    });
    resultBoxText.style.display = 'block';
    resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
  }

}

//토퍼 결과 값
function resultOptionToper() {
  if (result[1].innerText === '스프링 토퍼') {
    if (result[2].innerText === '하드') {
      if (result[3].innerText === '10-30만원대') {
        resultItem.forEach(function(item){
          item.style.display = 'none';
        });
        resultBoxText.style.display = 'block';
        resultBoxText.innerText = `검색 결과가 없습니다.`;
      } else if (result[3].innerText === '31-50만원대') {
        resultItemTitle[0].innerText = '[브랜드리스] 녹턴19 토퍼';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">48만원대~</a>
        `;
        resultItemTitle[1].innerText = '[브랜드리스] S4 슬림매트리스 토퍼';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">31만원대~</a>
        `;
        resultItemTitle[2].innerText = '[브랜드리스] S5 슬림매트리스 토퍼';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">40만원대~</a>
        `;
      } else if (result[3].innerText === '51-100만원대') {
        resultItemTitle[0].innerText = '[브랜드리스] 모피어스21 토퍼';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">58만원대~</a>
        `;
        resultItem[1].style.display = 'none';
        resultItem[2].style.display = 'none';
      } else {
        resultItem.forEach(function(item){
          item.style.display = 'none';
        });
        resultBoxText.style.display = 'block';
        resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
      }
    } else if (result[2].innerText === '미디엄') {
      if (result[3].innerText === '10-30만원대') {
        resultItemTitle[0].innerText = '[베스트슬립] SM2 양면 매트리스';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당</a>
        <a href="#none">25만원대~</a>
        `;
        resultItem[1].style.display = 'none';
        resultItem[2].style.display = 'none';
      } else if (result[3].innerText === '31-50만원대') {
        resultItemTitle[0].innerText = '[베스트슬립] SM5 양면 매트리스';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당</a>
        <a href="#none">45만원대~</a>
        `;
        resultItemTitle[1].innerText = '[베스트슬립] SM4 양면 매트리스';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당</a>
        <a href="#none">35만원대~</a>
        `;
        resultItemTitle[2].innerText = '[베스트슬립] SM3 양면 매트리스';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당</a>
        <a href="#none">31만원대~</a>
        `;
      } else if (result[3].innerText === '51-100만원대') {
        resultItem.forEach(function(item){
          item.style.display = 'none';
        });
        resultBoxText.style.display = 'block';
        resultBoxText.innerText = `검색 결과가 없습니다.`;
      } else {
        resultItem.forEach(function(item){
          item.style.display = 'none';
        });
        resultBoxText.style.display = 'block';
        resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
      }
    } else if (result[2].innerText === '소프트') {
      if (result[3].innerText === '10-30만원대') {
        resultItem.forEach(function(item){
          item.style.display = 'none';
        });
        resultBoxText.style.display = 'block';
        resultBoxText.innerText = `검색 결과가 없습니다.`;
      } else if (result[3].innerText === '31-50만원대') {
        resultItemTitle[0].innerText = '[브랜드리스] 녹턴19 토퍼';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">48만원대~</a>
        `;
        resultItemTitle[1].innerText = '[엘라비아] S4 슬림 매트리스 토퍼';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">31만원대~</a>
        `;
        resultItemTitle[2].innerText = '[엘라비아] S5 슬림 매트리스 토퍼';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">40만원대~</a>
        `;
      } else if (result[3].innerText === '51-100만원대') {
        resultItemTitle[0].innerText = '[브랜드리스] 모피어스21 토퍼';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">58만원대~</a>
        `;
        resultItem[1].style.display = 'none';
        resultItem[2].style.display = 'none';
      } else {
        resultItem.forEach(function(item){
          item.style.display = 'none';
        });
        resultBoxText.style.display = 'block';
        resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
      }
    } else {
      resultItem.forEach(function(item){
        item.style.display = 'none';
      });
      resultBoxText.style.display = 'block';
      resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
    }
  } else if (result[1].innerText === '폼 토퍼') {
    if (result[2].innerText === '하드') {
      if (result[3].innerText === '10-30만원대') {
        resultItemTitle[0].innerText = '[퀵슬립] 더 토퍼 하드';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">25만원대~</a>
        `;
        resultItemTitle[1].innerText = '[엘라비아] S3 슬림매트리스 토퍼';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">25만원대~</a>
        `;
        resultItem[2].style.display = 'none';
      } else if (result[3].innerText === '31-50만원대') {
        resultItemTitle[0].innerText = '[베스트슬립] Z5 토퍼 하드';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">44만원대~</a>
        `;
        resultItemTitle[1].innerText = '[베스트슬립] 엘라페딕 토퍼5 하드';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">49만원대~</a>
        `;
        resultItemTitle[2].innerText = '[퀵슬립] V5 메모리폼 토퍼';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">34만원대~</a>
        `;
      } else if (result[3].innerText === '51-100만원대') {
        resultItemTitle[0].innerText = '[베스트슬립] Z10 토퍼 하드';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">91만원대~</a>
        `;
        resultItemTitle[1].innerText = '[베스트슬립] Z8B 토퍼 하드';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">73만원대~</a>
        `;
        resultItemTitle[2].innerText = '[베스트슬립] Z7 토퍼 하드';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당탄탄</a>
        <a href="#none">54만원대~</a>
        `;
      } else {
        resultItem.forEach(function(item){
          item.style.display = 'none';
        });
        resultBoxText.style.display = 'block';
        resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
      }
    } else if (result[2].innerText === '미디엄') {
      if (result[3].innerText === '10-30만원대') {
        resultItemTitle[0].innerText = '[퀵슬립] V3 메모리폼 토퍼';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당</a>
        <a href="#none">20만원대~</a>
        `;
        resultItemTitle[1].innerText = '[베스트슬립] SM2 양면 슬림';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당</a>
        <a href="#none">25만원대~</a>
        `;
        resultItemTitle[2].innerText = '[엘라비아] S2 슬림매트리스 토퍼';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">11만원대~</a>
        `;
      } else if (result[3].innerText === '31-50만원대') {
        resultItemTitle[0].innerText = '[베스트슬립] Z5 토퍼 미디엄';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당</a>
        <a href="#none">44만원대~</a>
        `;
        resultItemTitle[1].innerText = '[베스트슬립] SM3 양면 슬림';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당</a>
        <a href="#none">31만원대~</a>
        `;
        resultItemTitle[2].innerText = '[퀵슬립] V5 메모리폼 토퍼';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당</a>
        <a href="#none">34만원대~</a>
        `;
      } else if (result[3].innerText === '51-100만원대') {
        resultItemTitle[0].innerText = '[베스트슬립] Z10 토퍼 미디엄';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당</a>
        <a href="#none">91만원대~</a>
        `;
        resultItemTitle[1].innerText = '[베스트슬립] Z10B 토퍼 미디엄';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당</a>
        <a href="#none">100만원대~</a>
        `;
        resultItemTitle[2].innerText = '[베스트슬립] Z6B 토퍼 미디엄';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당</a>
        <a href="#none">57만원대~</a>
        `;
      } else {
        resultItem.forEach(function(item){
          item.style.display = 'none';
        });
        resultBoxText.style.display = 'block';
        resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
      }
    } else if (result[2].innerText === '소프트') {
      if (result[3].innerText === '10-30만원대') {
        resultItemTitle[0].innerText = '[퀵슬립] 더 토퍼 소프트';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">25만원대~</a>
        `;
        resultItemTitle[1].innerText = '[엘라비아] S3 슬림 매트리스 토퍼';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">25만원대~</a>
        `;
        resultItem[2].style.display = 'none';
      } else if (result[3].innerText === '31-50만원대') {
        resultItemTitle[0].innerText = '[베스트슬립] Z5 토퍼 소프트';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">44만원대~</a>
        `;
        resultItemTitle[1].innerText = '[베스트슬립] 엘라페딕 토퍼5 소프트';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">49만원대~</a>
        `;
        resultItemTitle[2].innerText = '[퀵슬립] V5 메모리폼 토퍼';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">34만원대~</a>
        `;
      } else if (result[3].innerText === '51-100만원대') {
        resultItemTitle[0].innerText = '[베스트슬립] Z10 토퍼 소프트';
        resultItemCon[0].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">91만원대~</a>
        `;
        resultItemTitle[1].innerText = '[베스트슬립] Z8B 토퍼 소프트';
        resultItemCon[1].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">73만원대~</a>
        `;
        resultItemTitle[2].innerText = '[베스트슬립] Z10B 토퍼 소프트';
        resultItemCon[2].innerHTML =
          `
        <a href="#none">적당푹신</a>
        <a href="#none">100만원대~</a>
        `;
      } else {
        resultItem.forEach(function(item){
          item.style.display = 'none';
        });
        resultBoxText.style.display = 'block';
        resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
      }
    } else {
      resultItem.forEach(function(item){
        item.style.display = 'none';
      });
      resultBoxText.style.display = 'block';
      resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
    }
  } else {
    resultItem.forEach(function(item){
      item.style.display = 'none';
    });
    resultBoxText.style.display = 'block';
    resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
  }
}

/* 옵션에서 선택된 값 */
let mettressResult = mettressOption.options[mettressOption.selectedIndex].text;
let springResult = springOption.options[springOption.selectedIndex].text;
let hardResult = hardOption.options[hardOption.selectedIndex].text;
let priceResult = priceOption.options[priceOption.selectedIndex].text;
/* 추천받기 버튼 */
let commendBtn = document.querySelector('.commend-btn');
/* reset 버튼 */
let resetBtn = document.querySelector('.reset-btn');
/* close 버튼 */
let resultCloseBtn = document.querySelector('.result-close');
/* 추천받기누르면 생기는 새로운 창 */
let resultBox = document.querySelector('.result-box');

/* 추천받기 누르면 창 생김 */
commendBtn.addEventListener('click', function (e) {
  resultItem.forEach(function(item){
    item.style.display = 'block';
  });
  resultBoxText.style.display = 'none';

  e.preventDefault();
  resultBox.style.display = 'block';
  if (result[0].innerText === '매트리스') {
    resultOptionMettress();
  } else if (result[0].innerText === '토퍼') {
    resultOptionToper();
  } else {
    resultItem.forEach(function(item){
      item.style.display = 'none';
    });
    resultBoxText.style.display = 'block';
    resultBoxText.innerText = `옵션을 다시 선택해주세요.`;
  }
})

/* 닫기 버튼 누르면 창 닫힘 */
resultCloseBtn.addEventListener('click', function (e) {
  e.preventDefault();
  resultBox.style.display = 'none';
  commendBtn.classList.remove('on');
  resetBtn.classList.add('on');
})

/* 리셋 버튼 누르면 선택된 값들과 선택된 값이 표시된 것들을 전부 리셋시킴 */
resetBtn.addEventListener('click', function () {
  resultItem.forEach(function(item){
    item.style.display = 'block';
  });
  resultBoxText.style.display = 'none';
  commendBtn.classList.remove('on');
  resetBtn.classList.remove('on');
  result.forEach(function (resultAll) {
    resultAll.innerText = '옵션을 선택해주세요.';
  })
})