<template>
    <div>
        <div class="overflow-y-hide">
            <div class="row">
                <div class="col-lg-6">
                    <div class="header-logo"></div>
                </div>
                <div class="col-lg-6 header-btn text-right">
                    <a-button type="primary" class="btn-active"><router-link to="/login">Become a Contributors</router-link></a-button>
                    <a-button type="primary" class="btn-active">Contact Us</a-button>
                    <a-button type="primary" @click="showModal" v-if="!isHidden">Sign In</a-button>
                    <a-dropdown v-if="!isHidden2">
                        <a-menu slot="overlay" @click="handleMenuClick">
                            <a-menu-item key="1">Dashboard</a-menu-item>
                            <a-menu-item key="2">Lightbox</a-menu-item>
                            <a-menu-item key="3">Shopping Cart</a-menu-item>
                            <a-menu-item key="4">Account Details</a-menu-item>
                            <a-menu-item key="5">Download Histry</a-menu-item>
                            <a-menu-item key="6" class="sign-out">Sign Out</a-menu-item>
                        </a-menu>
                        <a-button style="margin-left: 8px"> Hello, Customer <a-icon type="down" /> </a-button>
                    </a-dropdown>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 text-center">
                    <a-input class="home-search" style="width: 75vw" placeholder="Search Images" />
                    <a-icon type="camera" class="input-camera" />
                    <a-button slot="suffix" class="search-btn" size="large" type="primary">
                        <a-icon type="search" />
                    </a-button>
                    <a-select showSearch class="home-Select"
                              placeholder="Categories"
                              optionFilterProp="children"
                              style="width: 125px"
                              @focus="handleFocus"
                              @blur="handleBlur"
                              @change="handleChange"
                              :filterOption="filterOption">
                        <a-select-option value="Abstract">Abstract</a-select-option>
                        <a-select-option value="Business">Business/Finance</a-select-option>
                        <a-select-option value="jack">Celebrities</a-select-option>
                        <a-select-option value="Celebrities">Interiors</a-select-option>
                        <a-select-option value="Eduction">Eduction</a-select-option>
                        <a-select-option value="Nature">Nature</a-select-option>
                    </a-select>
                </div>
            </div>
            <div class="homeImg"></div>

            <div id="gallery">
                <a >
                    <img alt="Lemon Slice"
                         src="img/1544609188-00592k-DS0018769.jpg"
                         data-image="img/1544609188-00592k-DS0018769.jpg"
                         data-description="This is a Lemon Slice"
                         style="display:none">
                </a>
                <a >
                    <img alt="Peppers"
                         src="img/1544696869-002561-IS0058726.jpg"
                         data-image="img/1544696869-002561-IS0058726.jpg"
                         data-description="Those are peppers">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544946784-05184k-DS0022459.jpg"
                         data-image="img/1544946784-05184k-DS0022459.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544949149-05498A-IS0072619.jpg"
                         data-image="img/1544949149-05498A-IS0072619.jpg"
                         data-description="Those are keys">
                </a>

                <a>
                    <img alt="Keys"
                         src="img/1544984443-06355A-IS0066806.jpg"
                         data-image="img/1544984443-06355A-IS0066806.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544996679-06401k-DS0014482.jpg"
                         data-image="img/1544996679-06401k-DS0014482.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1545012515-07967G-IS0051237.jpg"
                         data-image="img/1545012515-07967G-IS0051237.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Lemon Slice"
                         src="img/1544609188-00592k-DS0018769.jpg"
                         data-image="img/1544609188-00592k-DS0018769.jpg"
                         data-description="This is a Lemon Slice"
                         style="display:none">
                </a>
                <a>
                    <img alt="Peppers"
                         src="img/1544696869-002561-IS0058726.jpg"
                         data-image="img/1544696869-002561-IS0058726.jpg"
                         data-description="Those are peppers">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544708327-01494B-DS0011374.jpg"
                         data-image="img/1544708327-01494B-DS0011374.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544738911-02541A-IS0000243.jpg"
                         data-image="img/1544738911-02541A-IS0000243.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544944589-04888A-DS0033962.jpg"
                         data-image="img/1544944589-04888A-DS0033962.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544946784-05184k-DS0022459.jpg"
                         data-image="img/1544946784-05184k-DS0022459.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544949149-05498A-IS0072619.jpg"
                         data-image="img/1544949149-05498A-IS0072619.jpg"
                         data-description="Those are keys">
                </a>

                <a>
                    <img alt="Keys"
                         src="img/1544984443-06355A-IS0066806.jpg"
                         data-image="img/1544984443-06355A-IS0066806.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544996679-06401k-DS0014482.jpg"
                         data-image="img/1544996679-06401k-DS0014482.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1545012515-07967G-IS0051237.jpg"
                         data-image="img/1545012515-07967G-IS0051237.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Lemon Slice"
                         src="img/1544609188-00592k-DS0018769.jpg"
                         data-image="img/1544609188-00592k-DS0018769.jpg"
                         data-description="This is a Lemon Slice"
                         style="display:none">
                </a>
                <a>
                    <img alt="Peppers"
                         src="img/1544696869-002561-IS0058726.jpg"
                         data-image="img/1544696869-002561-IS0058726.jpg"
                         data-description="Those are peppers">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544708327-01494B-DS0011374.jpg"
                         data-image="img/1544708327-01494B-DS0011374.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544738911-02541A-IS0000243.jpg"
                         data-image="img/1544738911-02541A-IS0000243.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544944589-04888A-DS0033962.jpg"
                         data-image="img/1544944589-04888A-DS0033962.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544946784-05184k-DS0022459.jpg"
                         data-image="img/1544946784-05184k-DS0022459.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544949149-05498A-IS0072619.jpg"
                         data-image="img/1544949149-05498A-IS0072619.jpg"
                         data-description="Those are keys">
                </a>

                <a>
                    <img alt="Keys"
                         src="img/1544984443-06355A-IS0066806.jpg"
                         data-image="img/1544984443-06355A-IS0066806.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544996679-06401k-DS0014482.jpg"
                         data-image="img/1544996679-06401k-DS0014482.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1545012515-07967G-IS0051237.jpg"
                         data-image="img/1545012515-07967G-IS0051237.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Lemon Slice"
                         src="img/1544609188-00592k-DS0018769.jpg"
                         data-image="img/1544609188-00592k-DS0018769.jpg"
                         data-description="This is a Lemon Slice"
                         style="display:none">
                </a>
                <a>
                    <img alt="Peppers"
                         src="img/1544696869-002561-IS0058726.jpg"
                         data-image="img/1544696869-002561-IS0058726.jpg"
                         data-description="Those are peppers">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544708327-01494B-DS0011374.jpg"
                         data-image="img/1544708327-01494B-DS0011374.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544738911-02541A-IS0000243.jpg"
                         data-image="img/1544738911-02541A-IS0000243.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544944589-04888A-DS0033962.jpg"
                         data-image="img/1544944589-04888A-DS0033962.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544946784-05184k-DS0022459.jpg"
                         data-image="img/1544946784-05184k-DS0022459.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544949149-05498A-IS0072619.jpg"
                         data-image="img/1544949149-05498A-IS0072619.jpg"
                         data-description="Those are keys">
                </a>

                <a>
                    <img alt="Keys"
                         src="img/1544984443-06355A-IS0066806.jpg"
                         data-image="img/1544984443-06355A-IS0066806.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1544996679-06401k-DS0014482.jpg"
                         data-image="img/1544996679-06401k-DS0014482.jpg"
                         data-description="Those are keys">
                </a>
                <a>
                    <img alt="Keys"
                         src="img/1545012515-07967G-IS0051237.jpg"
                         data-image="img/1545012515-07967G-IS0051237.jpg"
                         data-description="Those are keys">
                </a>
            </div>
        </div>

        <a-modal class="login-form" v-model="visible" footer="" @ok="handleOk">
            <h5 class="text-center">Sign In</h5>
            <a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">
                <a-form-item>
                    <a-input v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
                             placeholder="Username">
                        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
                             type="password"
                             placeholder="Password">
                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <div class="row">
                        <div class="col-lg-6">
                            <a-checkbox v-decorator="[
                          'remember',
                          {
                            valuePropName: 'checked',
                            initialValue: true,
                          },
                        ]">
                                Remember me
                            </a-checkbox>
                        </div>
                        <div class="col-lg-6 text-right">
                            <a class="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-12">
                            <a-button type="primary" html-type="submit" class="login-form-button" style="width: 100%" @click="loginCheck">
                                Log in
                            </a-button>
                        </div>

                    </div>
                    <div>
                        Or
                        <a href="">
                            register now!
                        </a>
                    </div>

                </a-form-item>
                <a-form-item>
                    <div class="row">
                        <div class="col-lg-6">
                            <a-button type="primary" html-type="submit" class="facebook-login" style="width: 100%">
                                Sign in with Facebook
                            </a-button>
                        </div>
                        <div class="col-lg-6">
                            <a-button type="primary" html-type="submit" class="google-login" style="width: 100%">
                                Sign in with google
                            </a-button>
                        </div>
                    </div>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>

<script>
    // @ is an alias to /src
    import { Button } from 'ant-design-vue';
    import Vue from "vue";
    Vue.use(Button);

    export default {
        name: "Home",
        data() {
            return {
                visible: false,
                dataSource: [],
                isHidden: false,
                isHidden2: true
            };
        },
        methods: {
            loginCheck() {
                //this.$router.push("dashboard")
                this.isHidden = true;
                this.isHidden2 = false;
                this.visible = false;
            },
            showModal() {
                this.visible = true;
            },
            handleOk(e) {
                console.log(e);
                this.visible = false;
            },
            onSelect(value) {
                console.log('onSelect', value);
            },

            handleSearch(value) {
                this.dataSource = value ? this.searchResult(value) : [];
            },

            getRandomInt(max, min = 0) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },

            searchResult(query) {
                return new Array(this.getRandomInt(5))
                    .join('.')
                    .split('.')
                    .map((item, idx) => ({
                        query,
                        category: `${query}${idx}`,
                        count: this.getRandomInt(200, 100),
                    }));
            },
        },
    };
</script>
