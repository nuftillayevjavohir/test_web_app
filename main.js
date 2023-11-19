tg = window.Telegram.WebApp


let params = new URLSearchParams(window.location.search);
let userID = params.get('token');

console.log(userID)

data = 'hello, i array from web app'

btn_send = document.getElementById('send_data')
btn_main = document.getElementById('main_button')
init_data = document.getElementById('init_data')

tg.expand()

btn_main.addEventListener('click', (e) => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
        
    } else {
        tg.MainButton.show()
    }

})


Telegram.WebApp.onEvent("mainButtonClicked", () => {
    tg.sendData(data)
    console.log(param1Value, '\n' ,param2Value)
})


btn_send.addEventListener('click', (e) => {
    tg.sendData(data)
    console.log(param1Value, '\n' ,param2Value)
})

init_data.innerText = userID
// init_data.innerText = `${tg.initDataUnsafe.query_id}\n`
// init_data.innerText += `${tg.initDataUnsafe.user}\n`
// init_data.innerText += `${tg.initDataUnsafe.user?.id}\n`
// init_data.innerText += `${tg.initDataUnsafe.user?.is_bot}\n`
// init_data.innerText += `${tg.initDataUnsafe.user?.first_name}\n`
// init_data.innerText += `${tg.initDataUnsafe.user?.last_name}\n`
// init_data.innerText += `${tg.initDataUnsafe.user?.username}\n`
// init_data.innerText += `${tg.initDataUnsafe.user?.language_code}\n`
// init_data.innerText += `${tg.initDataUnsafe.user?.is_premium}\n`
// init_data.innerText += `${tg.initDataUnsafe.user?.added_to_attachment_menu}\n`
// init_data.innerText += `${tg.initDataUnsafe.user?.allows_write_to_pm}\n`
// init_data.innerText += `${tg.initDataUnsafe.user?.photo_url}\n`
// init_data.innerText += `${tg.initDataUnsafe.receiver}\n`
// init_data.innerText += `${tg.initDataUnsafe.chat}\n`
// init_data.innerText += `${tg.initDataUnsafe.chat_type}\n`
// init_data.innerText += `${tg.initDataUnsafe.chat_instance}\n`
// init_data.innerText += `${tg.initDataUnsafe.start_param}\n`
// init_data.innerText += `${tg.initDataUnsafe.can_send_after}\n`
// init_data.innerText += `${tg.initDataUnsafe.auth_date}\n`
// init_data.innerText += `${tg.initDataUnsafe.hash}\n`


// console.log(tg.initData)
// console.log(window.Telegram.WebApp.initData)
// console.log(Telegram?.WebApp?.initData)
