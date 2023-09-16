<template>
  <div class="two-column-layout">
    <div class="two-column-layout__sidebar" 
        :class="isSidebarActive">
      <div class="two-column-layout__sidebar__top">
        <div class="two-column-layout__sidebar__top__title">
          <ph-chart-line-up weight="bold" />
          <span>Dashboard</span>
        </div>
        <ph-x v-if="isSidebarActive" weight="bold" class="two-column-layout__sidebar__toggle" @click="toggleSidebar()" />
        <ph-list v-else weight="bold" class="two-column-layout__sidebar__toggle" @click="toggleSidebar()" />
      </div>
      <div class="two-column-layout__sidebar__logo">
        <img :src="$options.logo" alt="logo" class="two-column-layout__sidebar__logo--img"/>  
      </div>
      <ul>
        <li v-for="(option, index) in $options.navOptions"
            :key="index">
          <a :href="option.path">
            <component :is="option.icon" />
            <span class="two-column-layout__sidebar__item">{{ option.name }}</span>
          </a>
          <span class="two-column-layout__sidebar__tooltip">{{ option.name }}</span>
        </li>
      </ul>
    </div>
    <one-column-layout class="two-column-layout__content">
      <slot></slot>  
    </one-column-layout>     
  </div>
</template>

<script>
  import logo from '@/assets/logo.png';
  import { PhHouse, PhQuestion, PhGear, PhSignOut, PhX, PhList, PhChartLineUp } from 'phosphor-vue';

  export default {
    name: "two-column-layout",
    components: { PhX, PhList, PhChartLineUp },
    data() {
      return {
        selectedPath: null,
        isActive: true,
      }
    },
    computed: {
      activePathClass() {
        return (path) => this.selectedPath === path ? 'active' : '';
      },
      isSidebarActive() {
        return this.isActive ? 'active' : '';
      }
    },
    mounted() {
      this.selectedPath = this.$route.path;
    },
    methods: {
      routeToPath(path) {
        if(this.selectedPath !== path) this.$router.push(path);
      },
      updateSelectedPath(newRoute, oldRoute) {
        if (newRoute !== oldRoute) {
          this.selectedPath = newRoute;
        }
      },
      toggleSidebar() {
        this.isActive = !this.isActive;
      }
    },
    watch: {
      '$route.path': 'updateSelectedPath'
    },
    logo,
    navOptions: [
      {
        name: 'Home',
        path: '/',
        icon: PhHouse,
      },
      {
        name: 'About',
        path: '/about',
        icon: PhQuestion,
      },
      {
        name: 'Settings',
        path: '/settings',
        icon: PhGear,
      },
      {
        name: 'Logout',
        path: '',
        icon: PhSignOut,
      },
    ]
  }
</script>

<style lang="scss">
  .two-column-layout {
    height: 100vh;

    &__content {
      position: relative;
      height: 100%;
      top: 0;
      left: 80px;
      width: calc(100% - 80px);
      transition: all 0.5s ease;
      padding: 16px;
    }

    
    &__sidebar {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 80px;
      background-color: #12171e;
      padding: .4rem .8rem;
      transition: all 0.5s ease;

      &__top {
        &__title {
          color: white;
          display: flex;
          height: 50px;
          width: 100%;
          align-items: center;
          pointer-events: none;
          opacity: 0;

          svg {
            font-size: 2rem;
            margin-right: 5px;
          }
        }
      }

      &__logo {
        &--img {
          width: 50px;
        }
      }

      &.active {
        width: 250px;

        ~.two-column-layout__content {
          left: 250px;
          width: calc(100% - 250px);
        }

        .two-column-layout__sidebar__top__title {
          opacity: 1;
        }

        .two-column-layout__sidebar__toggle {
          left: 90%;
        }

        .two-column-layout__sidebar__item {
          opacity: 1;
        }

        ul {

          li {

            .two-column-layout__sidebar__tooltip {
              display: none;
            }
          }
        }
      }

      &__toggle {
        position: absolute;
        color: white;
        top: .8rem;
        left: 50%;
        font-size: 2rem;
        line-height: 50px;
        transform: translateX(-50%);
        cursor: pointer;
      }

      ul {

        li {
          position: relative;
          list-style-type: none;
          height: 50px;
          width: 90%;
          margin: 0.8rem 0;
          line-height: 50px;

          a {
            color: white;
            display: flex;
            align-items: center;
            text-decoration: none;
            border-radius: 0.8rem;

            &:hover {
              background: white;
              color: #12171e;
            }

            svg {
              min-width: 50px;
              font-size: 2rem;
              line-height: 50px;
              border-radius: 12px;
              margin-right: 16px;
            }
          }

          &:hover {

            .two-column-layout__sidebar__tooltip {
              opacity: 1;
            }
          }
        }
      }

      &__item {
        opacity: 0;
      }

      &__tooltip {
        position: absolute;
        left: 125px;
        background: #12171e;
        color: white;
        top: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0.5rem 0.8rem rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        padding: .4rem 1.2rem;
        line-height: 1.8rem;
        z-index: 0;
        opacity: 0;
        width: 110px;
        text-align: center;

      }
    }
  }
</style>