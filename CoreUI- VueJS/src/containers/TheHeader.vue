<template>
    <CHeader fixed with-subheader light>
        <!--<CToggler
          in-header
          class="ml-3 d-lg-none"
          v-c-emit-root-event:toggle-sidebar-mobile
        />
        <CToggler
          in-header
          class="ml-3 d-md-down-none"
          v-c-emit-root-event:toggle-sidebar
        />-->
        <!--<CHeaderBrand
          class="mx-auto d-lg-none"
          src="img/brand/coreui-vue-logo.svg"
          width="190"
          height="46"
          alt="CoreUI Logo"
        />-->
        <CHeaderNav class="d-md-down-none mr-auto">
            <CHeaderNavItem class="px-2">
                <CHeaderNavLink to="/dashboard">

                </CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem class="px-2">
                <CHeaderNavLink to="/users" exact>

                </CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem class="px-2">
                <CHeaderNavLink>

                </CHeaderNavLink>
            </CHeaderNavItem>
        </CHeaderNav>
        <CHeaderNav class="mr-6">
            <CHeaderNavItem class="d-md-down-none mx-2">
                <CHeaderNavLink>
                    <a-badge dot>
                        <i class="fas fa-camera"></i>
                    </a-badge>
                </CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem class="d-md-down-none mx-2">
                <CHeaderNavLink>
                    <a-badge dot>
                        <i class="far fa-envelope"></i>
                    </a-badge>
                </CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem class="d-md-down-none mx-2">
                <CHeaderNavLink>
                    <a-badge dot>
                        <i class="far fa-bell"></i>
                    </a-badge>
                </CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem class="d-md-down-none mx-2">
                <CHeaderNavLink>
                    <a-badge dot>
                        <i class="fas fa-dollar-sign"></i>
                    </a-badge>
                </CHeaderNavLink>
            </CHeaderNavItem>
            <CHeaderNavItem class="d-md-down-none mx-2">
                <CHeaderNavLink>
                    <a-badge dot>
                        <i class="fas fa-download"></i>
                    </a-badge>
                </CHeaderNavLink>
            </CHeaderNavItem>
            <TheHeaderDropdownAccnt />
        </CHeaderNav>
        <CSubheader class="px-3">
            <CBreadcrumbRouter class="border-0" />
        </CSubheader>
    </CHeader>
</template>

<script>
    import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

    export default {
        name: 'TheHeader',
        components: {
            TheHeaderDropdownAccnt
        }
    }
</script>
