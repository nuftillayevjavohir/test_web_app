tg = window.Telegram.WebApp

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
})


btn_send.addEventListener('click', (e) => {
    tg.sendData(data)
})


init_data.innerText = `${tg.initDataUnsafe.query_id}\t`
init_data.innerText += `${tg.initDataUnsafe.user.username}\t`
init_data.innerText += `${tg.initDataUnsafe.user.name}\t`
init_data.innerText += `${tg.initDataUnsafe.receiver}\t`
init_data.innerText += `${tg.initDataUnsafe.chat}\t`
init_data.innerText += `${tg.initDataUnsafe.chat_type}\t`
init_data.innerText += `${tg.initDataUnsafe.chat_instance}\t`
init_data.innerText += `${tg.initDataUnsafe.start_param}\t`
