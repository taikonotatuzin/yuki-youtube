from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get('https://news.yahoo.co.jp/')

driver.execute_script('''
    let headlines = document.querySelectorAll('#uamods-topics > div > div > div > ul a');
    headlines.forEach(headline => {
	    console.log(headline.textContent)
    });
''')
