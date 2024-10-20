import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='title'>
        <h2>DDongYeop's Portfolio</h2>
      </div>
      <div>
        { /* 반복문 찾아서 반복문 형태로 변경. */ }
        <h2 className='nameDivision'>주요 프로젝트</h2>
        <Portfolio index={0}/>
        <Portfolio index={1}/>
        <Portfolio index={2}/>
        <Portfolio index={3}/>
        <Portfolio index={4}/>
        <h2 className='nameDivision'>서브 프로젝트</h2>
        <Portfolio index={5}/>
        <Portfolio index={6}/>
        <Portfolio index={7}/>
        <Portfolio index={8}/>
        <Portfolio index={9}/>
        <Portfolio index={10}/>
        <Portfolio index={11}/>
        <Portfolio index={12}/>
        <Portfolio index={13}/>
        <Portfolio index={14}/>
        <Portfolio index={15}/>
        <Portfolio index={16}/>
        <Portfolio index={17}/>
        <Portfolio index={18}/>
        <Portfolio index={19}/>
        <Portfolio index={20}/>
        <Portfolio index={21}/>
        <Portfolio index={22}/>
        <Portfolio index={23}/>
        <Portfolio index={24}/>
      </div>
    </div>
  );
}

function Portfolio({index}) {
  //차후 스크립트 따로 만들어서 뺴기 
  const portfolioName = ['Hyper Drift', 'Smasher', 'BEAST 2.0', 'BEAST 1.0', 'Wind Rider', 'VeryNiceShot', '티니핑으로 알아보는 성격유형 테스트', '포트폴리오 웹사이트', 'TARGET', 'Kochi Rush', '버거리아', 'Protegg', 'Rainbow', '경기게임마이스터고등학교 입학 프로그램', 'Aim Factory', 'Flying Bee', 'Demefence', '명지반점', '가온누리', 'Knife Runner', 'Sqactory', 'Train Dream', 'DON’T CREATIVE', 'LUCID', 'Whale Wave'];
  const portfolioDescription = ['<HyperDrift>는 Drift를 적절하게 사용하여 더욱 멀리 나아가는 캐주얼, 레이싱 게임입니다', 
                                '<Smasher>는 AI와 배트민턴 경기를 하는 스포츠 게임입니다', 
                                '<BEAST 2.0>는 몬스터로부터 토템을 지키는 게임입니다.', 
                                '<BEAST>는 플레이어가 무기를 던져 보스를 사냥하는 게임입니다.', 
                                '<Wind Rider>는 사이버 펑크풍의 도시에서 쾌감 있는 액션과 짜릿한 속도로 달릴 수 있는 게임입니다.', 
                                '<VeryNiceShot>은 한정된 횟수 안에 홀에 공을 넣는 간단한 게임입니다.', 
                                '<티니핑으로 알아보는 성격유형 테스트>은 MBTI을 기반으로 알아보는 간단한 테스트 웹사이트입니다.', 
                                '', 
                                '<TARGET>은 칼을 공중에 띄우고 던져 공격하는 형식의 하이퍼 캐주얼 게임입니다.', 
                                '<KochiRush>는 탕후루 유행에 맞춰 개발한 하이퍼 캐주얼 게임입니다.', 
                                '<버거리아>는 휴대폰 잠금화면 중 패턴에서 영감을 받아 제작한 간단한 하이퍼 캐주얼 게임입니다.', 
                                '<Protegg>는 닭이 가운데에 있는 달걀을 인간의 손으로부터 지켜내는 게임입니다.', 
                                '<Rainbow>는 세계를 탐험하며 퍼즐을 푸는 ‘탑다운 액션 어드벤처’게임입니다.', 
                                '<경기게임마이스터고등학교 입학 프로그램>은 파일 탐색기와 카카오맵의 W3W 등을 사용하여 퍼즐을 풀어 나가는 게임입니다.', 
                                '<Aim Factory>는 플랫폼을 새로운 방식으로 올라가는 게임입니다.', 
                                '<Flying Bee>는 자연재해로 고통 받는 꿀벌이 말벌을 피해 다른 집으로 떠나는 게임입니다.', 
                                '<Demefence>는 유령들을 처처하며 버티는 형태의 슈팅 게임입니다.', 
                                '<명지반점>은 배달을 받고 배달지로 배달하는 시뮬레이션 게임입니다.', 
                                '<가온누리>는 블럭을 설치해서 도착지점으로 들어가는 시뮬레이션 게임입니다.', 
                                '<Knife Runner>는 적을 피해 도망가며 칼을 방어하는 게임입니다.', 
                                '<Sqactory>는 공장을 운영하며 1000원을 버는 것이 목표인 게임입니다.', 
                                '<Train Dream> 기차를 점점 늘려나가고 업그레이드하며, 적들을 물리치는 게임입니다.', 
                                '<DON’T CREATIVE>는 간단한 비행슈팅 게임입니다.', 
                                '<LUCID>는 꿈을 주제로한 플랫포머 게임입니다.', 
                                '<Whale Wave>는 물고기를 먹어가며, 고래를 성장시키는 게임입니다.'];
  const portfolioLink = ['https://ddongyeop.notion.site/Hyper-Drift-1188d7baccb980b69c83ffd7c4b4f806?pvs=4', 
                         'https://ddongyeop.notion.site/Smasher-1188d7baccb98081a49ae349cb7be363?pvs=4',
                         'https://ddongyeop.notion.site/BEAST-2-0-1188d7baccb9800a9162f5693a63e108?pvs=4',
                         'https://ddongyeop.notion.site/BEAST-1-0-1188d7baccb98074b2a6eef7e36e9d9d?pvs=4',
                         'https://ddongyeop.notion.site/Wind-Rider-1188d7baccb980b7b484d99dff335c04?pvs=4',
                         'https://ddongyeop.notion.site/VeryNiceShot-1188d7baccb98022b4b2db01f41e7b1a?pvs=4',
                         'https://ddongyeop.notion.site/1228d7baccb9808f9d8ec44cd722f6d9?pvs=4',
                         '',
                         'https://ddongyeop.notion.site/TARGET-1188d7baccb980f1b159f17eb2fb94ee?pvs=4',
                         'https://ddongyeop.notion.site/Kochi-Rush-1188d7baccb980719ba6ea6c75cb11ef?pvs=4',
                         'https://ddongyeop.notion.site/1188d7baccb9801b8decc20f60f7522b?pvs=4',
                         'https://ddongyeop.notion.site/Protegg-1188d7baccb9805fb4e3c82f16599e0a?pvs=4',
                         'https://ddongyeop.notion.site/Rainbow-1188d7baccb9800dbd82e2ac744d24e5?pvs=4',
                         'https://ddongyeop.notion.site/1188d7baccb980d9a7a8c22908240d53?pvs=4',
                         'https://ddongyeop.notion.site/Aim-Factory-1188d7baccb980a1b6d0c2ed2406410b?pvs=4',
                         'https://ddongyeop.notion.site/Flying-Bee-1188d7baccb980c691ffc2732038daef?pvs=4',
                         'https://ddongyeop.notion.site/Demefence-1188d7baccb980e789fec76ecf41ec75?pvs=4',
                         'https://ddongyeop.notion.site/1188d7baccb9800abd59f271dc624b9a?pvs=4',
                         'https://ddongyeop.notion.site/1188d7baccb9804692a9cdd30559b0a2?pvs=4',
                         'https://ddongyeop.notion.site/Knife-Runner-1188d7baccb98084aeecfe194e8719ce?pvs=4',
                         'https://ddongyeop.notion.site/Sqactory-1188d7baccb980308b55c5ea52833f51?pvs=4',
                         'https://ddongyeop.notion.site/Train-Dream-1188d7baccb980f49aefd59ad823692f?pvs=4',
                         'https://ddongyeop.notion.site/DON-T-CREATIVE-1188d7baccb9807f8a9ed5ee93397f68?pvs=4',
                         'https://ddongyeop.notion.site/LUCID-1188d7baccb98022af99fb41f1c66fbf?pvs=4',
                         'https://ddongyeop.notion.site/Whale-Wave-1188d7baccb9806282e2ebd80667f042?pvs=4',
  ];

  return (
    <div>
      <h3 className='portfolioName'>{portfolioName[index]}</h3>
      <h5 className='portfolioDescription'>{portfolioDescription[index]}</h5>
      <button className='detailBtn' onClick={ () => {
        window.open(portfolioLink[index]);
      }}>상세보기</button>
    </div>
  )
}

export default App;

/*
01. Hyper Drift
02. Smasher
03. BEAST 2.0
04. BEAST 1.0
05. Wind Rider
06. VeryNiceShot
07. 티니핑으로 알아보는 성격유형 테스트

09. TARGET
10. Kochi Rush
11. 버거리아
12. Protegg
13. Rainbow
14. 경기게임마이스터고등학교 입학 프로그램
15. Aim Factory
16. Flying Bee
17. Demefence
18. 명지반점
19. 가온누리
20. Knife Runner
21. Sqactory
22. Train Dream
23. DON’T CREATIVE
24. LUCID
25. Whale Wave
*/

/*

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

*/ 