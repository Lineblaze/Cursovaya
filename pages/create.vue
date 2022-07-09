<template>
    <div>
        <form 
            accept-charset="UTF-8"
            v-on:submit.prevent="onSubmit()"
            method="POST"
        >
            <div class="form-line">
                <label> Имя антагониста
                    <input type="text" v-model="name_hero"  placeholder="Название">
                </label>
                <label> Жизни
                    <input type="number" v-model="hp" placeholder="Введите значение">
                </label>
                <label> Уровень
                    <input type="number" v-model="lvl" placeholder="Введите значение">
                </label>
                <label> Мана
                    <input type="number" v-model="mana" placeholder="Введите значение">
                </label>
                <label> Раса
                    <input type="text" v-model="race" placeholder="Введите значение">
                </label>
            </div>
            <v-btn class="submit-btn" type="submit">Отправить</v-btn>
        </form>
    </div>
</template>

<script>
export default {
  data() {
      return {
        name_hero: '',
        hp: 0,
        lvl: 0,
        mana: 0,
        race: '',
    }
  },
  methods: {
      async onSubmit() {
        const data = {
            name_hero: this.name_hero,
            race: this.race,
            hp: Number(this.hp),
            lvl: Number(this.lvl),
            mana: Number(this.mana),
        }  
        if (
            data.name_hero === '' ||
            data.race === '' ||
            data.hp === 0
        ) {
            alert('Заполните все поля формы')
        } else {
            await this.$store.dispatch('postForm/postForm', data);
            alert(JSON.stringify(this.$store.getters['postForm/answer']));
            await this.$store.dispatch('her/fetch');
        }
      }
  }
}
</script>


<style scoped>
    .submit-btn {
        background: #fefefe;
        padding: 10px;
        color: #000;
        border-radius: 10px;
    }

    select {
        background: #fff;
        padding: 5px;
        width: 100%;
        border-radius: 10px;
    }

    .form-line {
        margin-bottom: 15px
    }


    input {
        background: #dedede;
        color: #000;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 15px;
    }

    form {
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
    }
</style>
