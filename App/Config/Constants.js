export default {

    language: 'ru',
    defaultLanguage: 'ru',

    apiBaseUrl: 'http://192.168.0.105/cardapi/',
    apiUserUrl: 'user/',
    apiRoomUrl: 'room/',

    errorApi: {
        no_data: 'Запрос, неопознан',
        no_user_action: 'Действие не опознано',
        token_lost: 'Авторизуйтесь снова',
        empty_login: 'Логин не указан',
        no_token: 'Ошибка авторизации пользователя',
        bad_pass: 'Не верный пароль',
        bad_login: 'Не верный логин',
        login_exists: 'Данный логин занят',
        user_didnt_create: 'Ошибка регистрации пользователя',
        not_Logout: 'Логаут не удалась',
        bad_token: 'bad_token',
        bad_name: 'bad_name',
        bad_query: 'bad_query',
    },
    userStatus: ["root", "Админ", "зарос на админа", "игрок", "запрос игрока", "гость", "зритель", ",бан"],
};
