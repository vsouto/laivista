<template>
    <div class="app-sidebar sidebar-shadow"
         @mouseover="toggleSidebarHover('add','closed-sidebar-open')"
         @mouseleave="toggleSidebarHover('remove','closed-sidebar-open')">
        <div class="app-header__logo">
            <div class="logo-src"/>
            <div class="header__pane ml-auto">
                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" v-bind:class="{ 'is-active' : isOpen }" @click="toggleBodyClass('closed-sidebar')">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-sidebar-content">
          <div class="app-sidebar-content">
            <section class="ps-container app-sidebar-scroll ps ps--theme_default ps--active-y"
                     data-ps-id="77d6acbd-3e24-0607-0cd8-cb30ee259a98">
              <div class="v-sidebar-menu vsm-default" style="width: 350px;">
                <div class="vsm-list">
                  <div class="vsm-header">
                    Main Navigation
                  </div>
                  <div class="vsm-item first-item open-item parent-active-item"><a href="#" class="vsm-link"><i
                    class="vsm-icon pe-7s-rocket"></i> <!----> <span class="vsm-title">Dashboards</span> <i
                    class="vsm-arrow open-arrow"></i></a>
                    <div class="vsm-dropdown">
                      <div class="vsm-list">
                        <div class="vsm-item active-item"><a href="#/"
                                                             class="vsm-link router-link-exact-active router-link-active"><!---->
                          <!----> <span class="vsm-title">Analytics</span> <!----></a> <!----></div>
                        <div class="vsm-item"><a href="#/dashboards/advertisement" class="vsm-link"><!----> <!----> <span
                          class="vsm-title">Advertisement</span> <!----></a> <!----></div>
                        <div class="vsm-item"><a href="#/dashboards/management" class="vsm-link"><!----> <!----> <span
                          class="vsm-title">Management</span> <!----></a> <!----></div>
                        <div class="vsm-item"><a href="#/dashboards/helpdesk" class="vsm-link"><!----> <!----> <span
                          class="vsm-title">Helpdesk</span> <!----></a> <!----></div>
                        <div class="vsm-item"><a href="#/dashboards/monitoring" class="vsm-link"><!----> <!----> <span
                          class="vsm-title">Monitoring</span> <!----></a> <!----></div>
                        <div class="vsm-item"><a href="#/dashboards/crypto" class="vsm-link"><!----> <!----> <span
                          class="vsm-title">Crypto</span> <!----></a> <!----></div>
                        <div class="vsm-item"><a href="#/dashboards/project-management" class="vsm-link"><!----> <!----> <span
                          class="vsm-title">Project Management</span> <!----></a> <!----></div>
                        <div class="vsm-item"><a href="#/dashboards/product" class="vsm-link"><!----> <!----> <span
                          class="vsm-title">Product</span> <!----></a> <!----></div>
                        <div class="vsm-item"><a href="#/dashboards/statistics" class="vsm-link"><!----> <!----> <span
                          class="vsm-title">Statistics</span> <!----></a> <!----></div>
                      </div>
                    </div>
                  </div>
                  <div class="vsm-item first-item"><a href="#" class="vsm-link"><i class="vsm-icon pe-7s-browser"></i> <!---->
                    <span class="vsm-title">Pages</span> <i class="vsm-arrow"></i></a> <!----></div>
                  <div class="vsm-item first-item"><a href="#" class="vsm-link"><i class="vsm-icon pe-7s-plugin"></i> <!---->
                    <span class="vsm-title">Applications</span> <i class="vsm-arrow"></i></a> <!----></div>
                  <div class="vsm-header">
                    UI Components
                  </div>
                  <div class="vsm-item first-item"><a href="#" class="vsm-link"><i class="vsm-icon pe-7s-diamond"></i> <!---->
                    <span class="vsm-title">Elements</span> <i class="vsm-arrow"></i></a> <!----></div>
                  <div class="vsm-item first-item"><a href="#" class="vsm-link"><i class="vsm-icon pe-7s-car"></i> <!----> <span
                    class="vsm-title">Components</span> <i class="vsm-arrow"></i></a> <!----></div>
                  <div class="vsm-item first-item"><a href="#" class="vsm-link"><i class="vsm-icon pe-7s-display2"></i> <!---->
                    <span class="vsm-title">Tables</span> <i class="vsm-arrow"></i></a> <!----></div>
                  <div class="vsm-header">
                    Material Components
                  </div>
                  <div class="vsm-item first-item"><a href="#" class="vsm-link"><i class="vsm-icon pe-7s-diamond"></i> <!---->
                    <span class="vsm-title">Form Controls</span> <i class="vsm-arrow"></i></a> <!----></div>
                  <div class="vsm-item first-item"><a href="#" class="vsm-link"><i class="vsm-icon pe-7s-diamond"></i> <!---->
                    <span class="vsm-title">Navigation</span> <i class="vsm-arrow"></i></a> <!----></div>
                  <div class="vsm-item first-item"><a href="#" class="vsm-link"><i class="vsm-icon pe-7s-diamond"></i> <!---->
                    <span class="vsm-title">Layout</span> <i class="vsm-arrow"></i></a> <!----></div>
                  <div class="vsm-item first-item"><a href="#" class="vsm-link"><i class="vsm-icon pe-7s-diamond"></i> <!---->
                    <span class="vsm-title">Buttons &amp; Indicators</span> <i class="vsm-arrow"></i></a> <!----></div>
                  <div class="vsm-item first-item"><a href="#" class="vsm-link"><i class="vsm-icon pe-7s-diamond"></i> <!---->
                    <span class="vsm-title">Popups &amp; Modals</span> <i class="vsm-arrow"></i></a> <!----></div>
                  <div class="vsm-item first-item"><a href="#" class="vsm-link"><i class="vsm-icon pe-7s-diamond"></i> <!---->
                    <span class="vsm-title">Components</span> <i class="vsm-arrow"></i></a> <!----></div>
                  <div class="vsm-header">
                    Dashboard Boxes
                  </div>
                  <div class="vsm-item first-item"><a href="#" class="vsm-link"><i class="vsm-icon pe-7s-graph2"></i> <!---->
                    <span class="vsm-title">Chart Boxes</span> <i class="vsm-arrow"></i></a> <!----></div>
                  <div class="vsm-item first-item"><a href="#/widgets/profile-boxes" class="vsm-link"><i
                    class="vsm-icon pe-7s-id"></i> <!----> <span class="vsm-title">Profile Boxes</span> <!----></a> <!----></div>
                  <div class="vsm-header">
                    Forms
                  </div>
                  <div class="vsm-item first-item"><a href="#" class="vsm-link"><i class="vsm-icon pe-7s-light"></i> <!----> <span
                    class="vsm-title">Elements</span> <i class="vsm-arrow"></i></a> <!----></div>
                  <div class="vsm-item first-item"><a href="#" class="vsm-link"><i class="vsm-icon pe-7s-joy"></i> <!----> <span
                    class="vsm-title">Widgets</span> <i class="vsm-arrow"></i></a> <!----></div>
                  <div class="vsm-header">
                    Charts
                  </div>
                  <div class="vsm-item first-item"><a href="#/charts/chartjs" class="vsm-link"><i
                    class="vsm-icon pe-7s-graph2"></i> <!----> <span class="vsm-title">ChartJS</span> <!----></a> <!----></div>
                  <div class="vsm-item first-item"><a href="#/charts/apexcharts" class="vsm-link"><i
                    class="vsm-icon pe-7s-graph"></i> <!----> <span class="vsm-title">Apex Charts</span> <!----></a> <!----></div>
                  <div class="vsm-item first-item"><a href="#/charts/gauges" class="vsm-link"><i class="vsm-icon pe-7s-gleam"></i>
                    <!----> <span class="vsm-title">Gauges</span> <!----></a> <!----></div>
                  <div class="vsm-item first-item"><a href="#/charts/sparklines" class="vsm-link"><i
                    class="vsm-icon pe-7s-graph1"></i> <!----> <span class="vsm-title">Chart Sparklines</span> <!----></a> <!---->
                  </div>
                </div> <!---->
                <button class="collapse-btn"></button>
              </div>
              <div class="ps__scrollbar-x-rail" style="left: 0px; bottom: 0px;">
                <div class="ps__scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
              </div>
              <div class="ps__scrollbar-y-rail" style="top: 0px; height: 887px; right: 0px;">
                <div class="ps__scrollbar-y" tabindex="0" style="top: 0px; height: 611px;"></div>
              </div>
            </section>
          </div>
        </div>
    </div>
</template>

<script>
    import {SidebarMenu} from 'vue-sidebar-menu'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        components: {
            SidebarMenu,
            VuePerfectScrollbar
        },
        data() {
            return {
                isOpen: false,
                sidebarActive: false,
                menu: [
                    {
                        header: true,
                        title: 'Main Navigation',
                    },
                    {
                        title: 'Dashboards',
                        icon: 'pe-7s-rocket',
                        child: [
                            {
                                href: '/',
                                title: 'Analytics',
                            },
                        ]
                    },
                    {
                        title: 'Pages',
                        icon: 'pe-7s-browser',
                        child: [
                            {
                                href: '/pages/login-boxed',
                                title: 'Login Boxed',
                            },
                            {
                                href: '/pages/register-boxed',
                                title: 'Register Boxed',
                            },
                            {
                                href: '/pages/forgot-password-boxed',
                                title: 'Forgot Password Boxed',
                            },
                        ]
                    },
                    {
                        header: true,
                        title: 'UI Components',
                    },
                    {
                        icon: 'pe-7s-diamond',
                        title: 'Elements',
                        child: [
                            {
                                title: 'Buttons',
                                child: [
                                    {
                                        title: 'Standard',
                                        href: '/elements/buttons-standard',
                                    },
                                ]
                            },
                            {
                                title: 'Dropdowns',
                                href: '/elements/dropdowns',
                            },
                            {
                                title: 'Icons',
                                href: '/elements/icons',
                            },
                            {
                                title: 'Badges',
                                href: '/elements/badges-labels',
                            },
                            {
                                title: 'Cards',
                                href: '/elements/cards',
                            },
                            {
                                title: 'List Groups',
                                href: '/elements/list-group',
                            },
                            {
                                title: 'Timeline',
                                href: '/elements/timelines',
                            },
                            {
                                title: 'Utilities',
                                href: '/elements/utilities',
                            },
                        ],
                    },
                    {
                        icon: 'pe-7s-car',
                        title: 'Components',
                        child: [
                            {
                                title: 'Tabs',
                                href: '/components/tabs',
                            },
                            {
                                title: 'Accordions',
                                href: '/components/accordions',
                            },
                            {
                                title: 'Modals',
                                href: '/components/modals',
                            },
                            {
                                title: 'Progress Bar',
                                href: '/components/progress-bar',
                            },
                            {
                                title: 'Tooltips & Popovers',
                                href: '/components/tooltips-popovers',
                            },
                            {
                                title: 'Carousel',
                                href: '/components/carousel',
                            },
                            {
                                title: 'Pagination',
                                href: '/components/pagination',
                            },
                            {
                                title: 'Maps',
                                href: '/components/maps',
                            },
                        ],
                    },
                    {
                        icon: 'pe-7s-display2',
                        title: 'Tables',
                        child: [
                            {
                                title: 'Regular Tables',
                                href: '/tables/regular-tables',
                            },
                        ]
                    },
                    {
                        header: true,
                        title: 'Dashboard Boxes',
                    },
                    {
                        icon: 'pe-7s-graph2',
                        title: 'Chart Boxes',
                        href: '/widgets/chart-boxes-3',
                    },
                    {
                        header: true,
                        title: 'Forms',
                    },
                    {
                        icon: 'pe-7s-light',
                        title: 'Elements',
                        child: [
                            {
                                title: 'Controls',
                                href: '/forms/controls',
                            },
                            {
                                title: 'Layouts',
                                href: '/forms/layouts',
                            },
                        ],
                    },
                    {
                        header: true,
                        title: 'Charts',
                    },
                    {
                        icon: 'pe-7s-graph2',
                        title: 'ChartJS',
                        href: '/charts/chartjs',
                    },
                ],
                collapsed: true,

                windowWidth: 0,

            }
        },
        props: {
            sidebarbg: String,
        },
        methods: {

            toggleBodyClass(className) {
                const el = document.body;
                this.isOpen = !this.isOpen;

                if (this.isOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            toggleSidebarHover(add, className) {
                const el = document.body;
                this.sidebarActive = !this.sidebarActive;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth > '992') {
                    if (add === 'add') {
                        el.classList.add(className);
                    } else {
                        el.classList.remove(className);
                    }
                }
            },
            getWindowWidth() {
                const el = document.body;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth < '1350') {
                    el.classList.add('closed-sidebar', 'closed-sidebar-md');
                } else {
                    el.classList.remove('closed-sidebar', 'closed-sidebar-md');
                }
            },
        },
        mounted() {
            this.$nextTick(function () {
                window.addEventListener('resize', this.getWindowWidth);

                //Init
                this.getWindowWidth()
            })
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
        }
    }
</script>
