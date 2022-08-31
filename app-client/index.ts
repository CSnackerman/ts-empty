import helloTestController from 'Api/controller/TestController';
import helloTestModel from 'Api/model/TestModel';
import helloUserModel from 'Api/model/UserModel';
import helloTestView from 'Api/view/TestView';
import helloTestComponent from 'Client/component/TestComponent';
import helloTestLayout from 'Client/layout/TestLayout';
import helloHomePage from 'Client/page/HomePage';
import helloTestPage from 'Client/page/TestPage';
import helloLoggerMiddleware from 'Server/middleware/LoggerMiddleware';
import helloRouter from 'Server/router';
import 'Style/global.style.scss'

const app = async () => {
    helloRouter()
    helloHomePage()
    helloTestController()
    helloTestView()
    helloLoggerMiddleware()
    helloTestLayout()
    helloTestPage()
    helloTestModel()
    helloUserModel()
    helloTestComponent()

    const data = await fetch('/apiTest')
    const json = await data.json()

    Object.entries(json)
        .forEach(([key, value]) => {
            const item = document.createElement('h1')
            item.innerText = `${key} -> ${value}`
            document.querySelector('#root')?.append(item)
        }
    )
}

app().catch((e: Error) => console.log(e))