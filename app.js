new Vue({
    el:'#app',
    data:{
        running: false,
        playerLife: 100,
        monsterLife: 100
    },
    computed:{
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods:{
        iniciar(){
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
        },
        ataque(spc){
            this.dano('monsterLife', 5, 10, spc);
            this.dano('playerLife', 7, 12, false);
        },
        dano(atr, min, max, spc){
            const plus = spc ? 5 : 0;
            const dano = this.getRandom(min + plus, max + plus)
            //caso a diferença seja menor do que zero, retorna zero
            this[atr] = Math.max(this[atr] - dano, 0)
        },
        healAndHurt(){
            this.curar(10, 15)
            this.dano('playerLife', 7, 12, false)
        },
        curar(min, max){
            const cura = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + cura, 100)
        },
        getRandom(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        }
    },
    watch:{
        hasResult(value){
            if(value) this.running = false
        }
    }
})