const buttonElevent = Vue.component('button-element', {
    props: ['text', 'meth'],

    // data() {
    //     return {

    //     }
    // },

    template: `

        <button @click= "meth" class="sideBar__button">{{text}}<slot></slot></button>
    `,

});

const buttonSideBar = Vue.component('button-side-bar', {
    props: ['name'],

    data() {
        return {

        }
    },

    template: `
    <div  class="sideBar__buttons">
        <button class="sideBar__button">{{name[0]}}</button>
        <button class="sideBar__button">{{name[1]}}</button>
    </div>
    `,
    methods: {
        Kitchen() {
            // console.log('OOOps');
        }
    },
});


const sideBar = Vue.component('side-bar', {
    props: {},

    data() {
        return {
            tagsNames: [['Kitchen', 'Bedroom'], ['Building', 'Architecture'], ['Kitchen Planning', 'Bedroom']]
        }
    },

    template: `
    <div class="sideBar">
                <h3 class="sideBar__head">Tags</h3>

                <div v-for="tag in tagsNames" :key="tag.id"  class="sideBar__buttons">
                    <button class="sideBar__button">{{tag[0]}}</button>
                    <button class="sideBar__button">{{tag[1]}}</button>
                </div>
                


            </div>
    `,

});


const blogDetails = Vue.component('blog-details', {
    // props: ['articleName'],

    data() {
        return {
            articlesKitchen: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'],
            articlesBedroom: ['BedroomContrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'BedroomContrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'BedroomContrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'],
            articleName: ['Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'],
            count: 0,

        }
    },

    template: `<ol @click = asd() class="blogDetails__ol">
    <li v-for="article in articleName" :key="article.id" class="blogDetails__lists">
        {{article}}
    </li>
    
    
</ol>`,
    methods: {
        asd() {
            if (this.count % 2 === 0) {
                this.articleName = this.articlesKitchen;
                this.count = 1;
            } else {
                this.articleName = this.articlesBedroom;
                this.count = 0;
            }

        },
    },
});


const dateContent = Vue.component('dateContent', {
    data() {
        return {
            day: 26,
            month: 'December',
            year: 2022,

        }
    },

    template: `
        <p>{{day}} {{month}}, {{year}}</p>
    `,
});




const content1 = Vue.component('content1', {
    props: {},

    data() {
        return {

        }
    },
    components: {

        'dateContent': dateContent,
    },

    template: `
        <div class="blogDetails__date">
            
            <dateContent></dateContent>
            <div class="blogDetails__links">
                            <a href="#">Interior / </a>
                            <a href="#">Home / </a>
                            <a href="#">Decore</a>
                        </div>
        </div>
    `,
});
Vue.component('text-component', {
    props: {},

    data() {
        return {
            text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
            popular belief.There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered.`,
        }
    },

    template: `
        <p class="blogDetails__discription__text content2__text2">
         {{text}}
        </p>
    `,
});

const mainArticle = Vue.component('main-article', {
    props: ['image', 'own', 'additional'],
    components: {

        'contentArticle': content1,
    },

    template: `
    <div>
            <img class="blogDetails__img" :src="image" alt="photo">
            <content1></content1>
            <div class="blogDetails__discription">
                <p class="blogDetails__discription__text text1">
                    {{own}}
                </p>
                <p class="blogDetails__discription__text text2">
                    {{additional}}
                </p>
            </div>
    </div>
    `,
});

const spareArticle = Vue.component('spare-article', {
    props: ['image1', 'own'],


    template: `
    <div>
            <img class="blogDetails__img" :src="image1" alt="photo">
           
            <div class="blogDetails__discription">
                <p class="blogDeatails__discription__text content2__text2"">
                    {{own}}
                </p>
               
            </div>
    </div>
    `,
});
