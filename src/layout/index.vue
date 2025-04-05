<template>
<div id="wrapper">
    <aside class="sidebar" :class="{ collpased: collapsed }">
        <nav>
            <h3 class="logo">{{ collapsed?'VAS': 'Vue Admin Spa'}} </h3>
            <AsideMenu :items="menu_tree" :rid="'-1'"></AsideMenu>
            <!-- <AsideMenu2 :items="menu_tree_property_one" :rid="-1"></AsideMenu2> -->
        </nav>
    </aside>
    <main class="content-wrapper">
        <header>
            <svg class="toogle-btn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="18" height="18" @click="toggleSiderBar">
                <path d="M85.333 256A42.667 42.667 0 0 1 128 213.333h768a42.667 42.667 0 1 1 0 85.334H128A42.667 42.667 0 0 1 85.333 256zm0 256A42.667 42.667 0 0 1 128 469.333h512a42.667 42.667 0 1 1 0 85.334H128A42.667 42.667 0 0 1 85.333 512zm0 256A42.667 42.667 0 0 1 128 725.333h768a42.667 42.667 0 1 1 0 85.334H128A42.667 42.667 0 0 1 85.333 768z">
                </path>
            </svg>
            <a class="animated fadeIn">Hi,[lizw阿玮]</a>
        </header>
        <section>
            <router-view class="dynamic-view"></router-view>
        </section>
        <footer>footer area {{ msg }}</footer>
    </main>
</div>
</template>

<script>
import AsideMenu from '@/components/AsideMenu.vue';
import request from '@/axios';

//import AsideMenu2 from '@/components/AsideMenu2.vue'
export default {
    name: "layout",
    components: {
        AsideMenu,
        //AsideMenu2
    },
    data: function () {
        return {
            msg: 'test',
            collapsed: false,
            menu_tree_property_one: [ //{id:2,name:'',children:[]}
                {
                    id: 'PMSHOM',
                    name: 'Home',
                    icon: 'tabler:home-filled',
                    route: '/portal',
                    children: []
                },
                {
                    id: 'PMSENQ',
                    name: 'Enquiry',
                    icon: 'tabler:pencil-question',
                    children: [{
                            id: 'PMSENQ_CEN',
                            name: 'Customer Enquiry',
                            children: [],
                            route: '/cen'
                        },
                        {
                            id: 'PMSENQ_ABE',
                            name: 'Account Balance Enquiry',
                            children: [],
                            route: '/abe'
                        },
                        {
                            id: 'PMSENQ_LSE',
                            name: 'Lease Enquiry',
                            children: []
                        },
                        {
                            id: 'PMSENQ_EXS',
                            name: 'Executive Summary',
                            children: []
                        }
                    ]
                },
                {
                    id: 'PMSCTM',
                    name: 'Customer Management',
                    icon: 'tabler:users',
                    children: [{
                            id: 'PMSCTM_SEL',
                            name: 'Customer',
                            children: []
                        },
                        {
                            id: 'PMSCTM_APV',
                            name: 'Customer Approval',
                            children: []
                        },
                        {
                            id: 'PMSCTM_CPS',
                            name: 'Contact Point Search',
                            children: []
                        }
                    ]
                },
                {
                    id: 'PMSPPT',
                    name: 'Property Management',
                    icon: 'tabler:building-skyscraper',
                    children: [{
                            id: 'PMSPPT_PPD',
                            name: 'Property Definition',
                            children: [{
                                    id: 'PMSPPT_PPD_REG',
                                    name: 'Region',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_PPD_DEV',
                                    name: 'Development',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_PPD_PPT',
                                    name: 'Property',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_PPD_FLR',
                                    name: 'Floor',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_PPD_UNT',
                                    name: 'Unit',
                                    children: []
                                },
                            ]
                        },
                        {
                            id: 'PMSPPT_SPM',
                            name: 'Space Management',
                            children: [{
                                    id: 'PMSPPT_SPM_VHT',
                                    name: 'View History',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_SPM_SPL',
                                    name: 'Unit Split',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_SPM_CMB',
                                    name: 'Unit Combine',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_SPM_STS',
                                    name: 'Unit Status',
                                    children: []
                                }
                            ]
                        },
                        {
                            id: 'PMSPPT_LSM',
                            name: 'Lease Management',
                            children: [{
                                    id: 'PMSPPT_LSM_LSD',
                                    name: 'Lease Definition',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_LSM_ARS',
                                    name: 'Approval Request Submission',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_LSM_MUC',
                                    name: 'Max Update Charge',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_LSM_LAR',
                                    name: 'Mass Approval',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_LSM_LSV',
                                    name: 'View Lease',
                                    children: []
                                }
                            ]
                        },
                        {
                            id: 'PMSPPT_TOR',
                            name: 'Turnover Rent',
                            children: [{
                                    id: 'PMSPPT_TOR_TFD',
                                    name: 'TR Formula Definition',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_TOR_MMR',
                                    name: 'MGT Rental',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_LSM_SYP',
                                    name: 'Manually Synchronize POS Data',
                                    children: [{
                                            id: 'PMSPPT_LSM_SYP_ORGD',
                                            name: 'Upload Organization Data',
                                            children: []
                                        },
                                        {
                                            id: 'PMSPPT_LSM_SYP_CUSD',
                                            name: 'Upload Tenants File Data',
                                            children: []
                                        },
                                        {
                                            id: 'PMSPPT_LSM_SYP_SLED',
                                            name: 'Upload Shop Lease Data',
                                            children: []
                                        },
                                        {
                                            id: 'PMSPPT_LSM_SYP_SYDD',
                                            name: 'Synchronized Daily Sales Data',
                                            children: []
                                        }
                                    ]
                                },
                                {
                                    id: 'PMSPPT_TOR_MMA',
                                    name: 'MGT Approval',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_TOR_AAJ',
                                    name: 'AGT Adjustment',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_TOR_AAP',
                                    name: 'AGT Approval',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_TOR_GEQ',
                                    name: 'GT Enquiry',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_TOR_DTI',
                                    name: 'Daily Turnover Import',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_TOR_DMS',
                                    name: 'Daily Turnover Submit',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_TOR_CNG',
                                    name: 'Credit Note Generation',
                                    children: []
                                },
                            ]
                        },
                        {
                            id: 'PMSPPT_GMR',
                            name: 'Government Rents',
                            children: [{
                                id: 'PMSPPT_GMR_GRR',
                                name: 'Govt Rents',
                                children: []
                            }]
                        },
                        {
                            id: 'PMSPPT_BLS',
                            name: 'Billing Schedule',
                            children: [{
                                    id: 'PMSPPT_BLS_BSS',
                                    name: 'Billing Schedule Search',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_BLS_BSR',
                                    name: 'Billing Suspen/Recom',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_BLS_BSA',
                                    name: 'Billing Schedule Approval',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_BLS_BCD',
                                    name: 'Billing Cutoff Day',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_BLS_MBR',
                                    name: 'Month End Billing Run Submission',
                                    children: []
                                }
                            ]
                        },
                        {
                            id: 'PMSPPT_RFA',
                            name: 'RFA',
                            children: [{
                                    id: 'PMSPPT_RFA_LCC',
                                    name: 'Lease Combination For RFA Computation',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_RFA_TRR',
                                    name: 'Trial RFA Report',
                                    children: []
                                },
                                {
                                    id: 'PMSPPT_RFA_RIQ',
                                    name: 'RFA Inquiry',
                                    children: []
                                },
                            ]
                        },
                    ]
                },
                {
                    id: 'MM_PMSACR',
                    name: 'Account Receivable',
                    icon: 'tabler:coins',
                    children: [{
                            id: 'PMSACR_INV',
                            name: 'Invoice',
                            children: [{
                                    id: 'PMSACR_INV_SCH',
                                    name: 'Invoice Search',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_INV_TMP',
                                    name: 'Invoice Template',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_INV_TSH',
                                    name: 'Invoice Template Search',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_INV_GEN',
                                    name: 'Invoice Generation',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_INV_APR',
                                    name: 'Invoice Approval',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_INV_COD',
                                    name: 'AR Cut Off Date',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_INV_VAT',
                                    name: 'Submit VAT Invoice',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_VAT_QRY',
                                    name: 'Query VAT Status',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_VAT_VEW',
                                    name: 'VAT Viewer',
                                    children: []
                                }
                            ]
                        },
                        {
                            id: 'PMSACR_REC',
                            name: 'Receipt',
                            children: [{
                                    id: 'PMSACR_REC_SCH',
                                    name: 'Search',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_REC_ADD',
                                    name: 'Add',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_REC_APR',
                                    name: 'Approval',
                                    children: []
                                }
                            ]
                        },
                        {
                            id: 'PMSACR_INT',
                            name: 'Interest',
                            children: [{
                                    id: 'PMSACR_INT_PMS',
                                    name: 'Parameter Setup',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_INT_ITS',
                                    name: 'Interest Type Setup',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_INT_PRS',
                                    name: 'Prime Rate Setup',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_INT_ITW',
                                    name: 'Interest Waiving',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_INT_ICS',
                                    name: 'Interest Calculation Submission',
                                    children: []
                                }
                            ]
                        },
                        {
                            id: 'PMSACR_COL',
                            name: 'Collection',
                            children: [{
                                    id: 'PMSACR_COL_ACB',
                                    name: 'Account Balance',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_COL_LGC',
                                    name: 'Legal Case',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_COL_TPR',
                                    name: 'Telephone Reminder',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_COL_CRC',
                                    name: 'Credit Control',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_COL_AGD',
                                    name: 'Aging Definition',
                                    children: []
                                }
                            ]
                        },
                        {
                            id: 'PMSACR_DEP',
                            name: 'Deposit',
                            children: [{
                                    id: 'PMSACR_DEP_TMA',
                                    name: 'Termination Approval',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_DEP_CTB',
                                    name: 'Customer Balance',
                                    children: []
                                }
                            ]
                        },
                        {
                            id: 'PMSACR_ITF',
                            name: 'Interface',
                            children: [{
                                    id: 'PMSACR_ITF_DRD',
                                    name: 'Debtor Reference Definition',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_ITF_AWP',
                                    name: 'Autopay Withdrawal Priority',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_ITF_APG',
                                    name: 'Autopay Withdrawal Priority - Global',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_ITF_GAF',
                                    name: 'Generation Autopay File Job Submission',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_ITF_AFA',
                                    name: 'Autopay File Amendment',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_ITF_RCI',
                                    name: 'Receipt Import',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_ITF_RCC',
                                    name: 'Receipt Confirmation',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_ITF_AGI',
                                    name: 'AR-GL Interface',
                                    children: []
                                },
                            ]
                        },
                        {
                            id: 'PMSACR_RTP',
                            name: 'Rental Projection',
                            children: [{
                                    id: 'PMSACR_RTP_PRS',
                                    name: 'Period Setup',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_PJS',
                                    name: 'Projection Setup',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_PPS',
                                    name: 'Property Setup',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_UNS',
                                    name: 'Unit Setup',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_LES',
                                    name: 'Lease Setup',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_USP',
                                    name: 'Unit Split',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_UCO',
                                    name: 'Unit Combine',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_SFI',
                                    name: 'Building Service Fee File Import',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_JBS',
                                    name: 'Job Submission',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_DPR',
                                    name: 'Details Projection Report',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_RCR',
                                    name: 'Rental Collection Commission Report',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_LCR',
                                    name: 'Letting Commission Report',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_SPR',
                                    name: 'Summary Projection Report',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_PPR',
                                    name: 'Projection Parameters Report',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_VPR',
                                    name: 'Vacant Unit Expenses Projection Report',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_BSR',
                                    name: 'Budget Summary Report',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_BDR',
                                    name: 'Budget Detail Report',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_ECR',
                                    name: 'RP Extend Compenation Report',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_ELR',
                                    name: 'RP Extend License Report',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_RTP_EDR',
                                    name: 'RP Extend Duplicate Unit Report',
                                    children: []
                                },
                            ]
                        },
                        {
                            id: 'PMSACR_ESM',
                            name: 'Estate Management',
                            children: [{
                                    id: 'PMSACR_ESM_MTM',
                                    name: 'Meter Maintenance',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_ESM_CTM',
                                    name: 'Customer Meter',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_ESM_PCM',
                                    name: 'Billing Summary',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_ESM_BLG',
                                    name: 'Billing Generation',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_ESM_IMT',
                                    name: 'EM Import',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_ESM_EMR',
                                    name: 'EM Report',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_ESM_EDR',
                                    name: 'EM Detail Report',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_ESM_BAM',
                                    name: 'Billing Approval',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_ESM_IMC',
                                    name: 'EM Import Confirm',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_ESM_EMS',
                                    name: 'EM Summary Report',
                                    children: []
                                },
                                {
                                    id: 'PMSACR_ESM_MTT',
                                    name: 'Meter Templete Report',
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'PMSRPT',
                    name: 'Reports',
                    icon: 'tabler:report',
                    children: [{
                            id: 'PMSRPT_ARB',
                            name: 'AR Billing',
                            children: []
                        },
                        {
                            id: 'PMSRPT_ODI',
                            name: 'Overdue Interest',
                            children: []
                        },
                        {
                            id: 'PMSRPT_REC',
                            name: 'Receipt',
                            children: []
                        },
                        {
                            id: 'PMSRPT_CRC',
                            name: 'Credit Control',
                            children: []
                        },
                        {
                            id: 'PMSRPT_DTI',
                            name: 'Data Interface',
                            children: []
                        },
                        {
                            id: 'PMSRPT_MTN',
                            name: 'Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSRPT_TNC',
                            name: 'Tenancy',
                            children: []
                        },
                        {
                            id: 'PMSRPT_RFA',
                            name: 'Rent Free Amortisation',
                            children: []
                        },
                        {
                            id: 'PMSRPT_TOR',
                            name: 'Turnover Rent',
                            children: []
                        },
                        {
                            id: 'PMSRPT_PNB',
                            name: 'PN Billing',
                            children: []
                        },
                        {
                            id: 'PMSRPT_CTM',
                            name: 'Customer',
                            children: []
                        },
                        {
                            id: 'PMSRPT_RTE',
                            name: 'Rates',
                            children: []
                        },
                        {
                            id: 'PMSRPT_UNM',
                            name: 'Unit Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSRPT_PND',
                            name: 'PN Deposit',
                            children: []
                        },
                        {
                            id: 'PMSRPT_PNR',
                            name: 'PN Report',
                            children: []
                        }
                    ]
                },
                {
                    id: 'PMSADM',
                    name: 'Administration',
                    icon: 'tabler:manual-gearbox',
                    children: [{
                            id: 'PMSADM_USR',
                            name: 'User Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_RLE',
                            name: 'Role Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_RER',
                            name: 'Regular Request',
                            children: []
                        },
                        {
                            id: 'PMSADM_NAC',
                            name: 'Natural Account Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_CCC',
                            name: 'Cost Center Code Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_ICC',
                            name: 'Inter Company Code Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_CTC',
                            name: 'Country Code Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_PDC',
                            name: 'Product Code Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_CMM',
                            name: 'COA Mapping Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_BNK',
                            name: 'Bank Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_BRN',
                            name: 'Branch Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_COM',
                            name: 'Company Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_CCM',
                            name: 'Charge Code Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_PMM',
                            name: 'Payment Method Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_SIC',
                            name: 'SIC Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_FNC',
                            name: 'Function Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_TTM',
                            name: 'Term Type Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_AGM',
                            name: 'Agency Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_PTM',
                            name: 'Payment Term Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_STS',
                            name: 'Status Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_TNR',
                            name: 'Tenure Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_USG',
                            name: 'Usage Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_COC',
                            name: 'Company Class Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_CRM',
                            name: 'Company Role Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_RWA',
                            name: 'Reason of Waiving Audited GT',
                            children: []
                        },
                        {
                            id: 'PMSADM_UOM',
                            name: 'UOM Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_CNT',
                            name: 'Country Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_CTY',
                            name: 'City Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_PVC',
                            name: 'Province Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_LCD',
                            name: 'Last Calculation Date Maintenance',
                            children: []
                        },
                        {
                            id: 'PMSADM_RTP',
                            name: 'Report Test Page',
                            children: []
                        },
                        {
                            id: 'PMSADM_VAT',
                            name: 'VAT Parameters Maintenance',
                            children: []
                        },
                    ]
                }
            ],

            menu_tree_eAgentsAdmin: [],
            menu_tree: []
        }
    },
    created() {
        //获取菜单（考虑权限）
        request.get("/api/ajax.ashx?act=menu").then(r => {
            console.log(r   );
            this.menu_tree = this.array2tree(r.result, 0);
            console.log("menu_true(array2tree):", this.menu_tree);
        })
    },
    methods: {
        array2tree(arr, pid) {
            var res = [];
            arr.forEach(element => {
                //结构字段重组
                let m = {
                    id: element.AuthTypeId,
                    name: element.Auth_Name_Cn,
                    //name_cn: element.Auth_Name_Cn,
                    //name_tc: element.Auth_Name_Tc,
                    icon: element.Icon,
                    route: ""
                }                
                if (element.Parent_Id == pid) {
                    let subs = this.array2tree(arr, element.AuthTypeId);
                    if (subs.length > 0) {
                        m.children = subs;
                    }
                    res.push(m)
                }
            });
            return res;
        },
        toggleSiderBar() {
            console.log('invoke toogle sidebar');
            this.collapsed = !this.collapsed;
        }
    }
}
</script>

<style lang="scss" scoped>
#wrapper {
    display: flex;

    ::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }

    aside {
        box-sizing: border-box;
        width: var(--sidebar-width);
        height: 100vh;
        z-index: 5;
        transition: all 0.3s;
        background: #fff;
        overflow-x: hidden;
        overflow-y: auto;

        scrollbar-arrow-color: aqua;
        /*overflow-y: scroll;*/
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);

        &.collpased {
            width: var(--sidebar-collapsed-width);
            transition: all 0.3s;
        }

        nav {
            ul {
                position: relative;
            }

            li {
                list-style: none;
                position: relative;
                // background-color: coral;           
            }
        }
    }

    main.content-wrapper {
        max-width: calc(100% - 260px);
        flex-grow: 1;
        position: relative;
        background: #f8f8f8;
        height: 100vh;
        transition: all 0.3s;

        .dynamic-view {
            padding: 15px 15px 60px 15px;

        }

        section {
            height: calc(100vh - 60px - 48px);
            overflow: scroll;
        }
    }

    header {
        position: relative;
        overflow: hidden;
        border-bottom: 1px solid #efefef;
        background: #fff;
        color: #353d47;
        padding: 0px 15px;
        z-index: 4;
        box-sizing: border-box;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;

        svg {
            margin-right: 5px;
            cursor: pointer;
        }

        a {
            line-height: 60px;
        }

    }

    footer {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        padding: 15px;
        font-size: 14px;
    }
}

/* logo */
.logo {
    color: #333;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    padding: 18px 0;
    margin: 0;
    height: 60px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #efefef;
}

/* menu structure*/
a {
    text-decoration: none;
}

.menu {
    // background: darkkhaki;
    width: 100%;
    border-right: none !important;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
}

.sub-menu {
    // list-style: none;
    margin: 0;
    padding-left: 0;

    .sub-menu-title {
        height: 56px;
        line-height: 56px;
        font-size: 14px;
        color: #303133;
        padding: 0 20px;
        cursor: pointer;
        position: relative;
        -webkit-transition: border-color 0.3s, background-color 0.3s, color 0.3s;
        transition: border-color 0.3s, background-color 0.3s, color 0.3s;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        white-space: nowrap;
    }

    .sub-menu-icon-arrow {
        position: absolute;
        top: 50%;
        right: 20px;
        margin-top: -9px;
        line-height: 1;
        -webkit-transition: -webkit-transform 0.3s;
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        transition: transform 0.3s, -webkit-transform 0.3s;
        font-size: 12px;
    }

    ul {
        height: 0px;
        overflow: hidden;
    }

    .menu-item {
        padding: 0 20px;
        min-width: 160px;
        height: 50px;
        padding-left: 50px !important;
    }
}

.is-opened {
    display: block;
    transition: all 2s;
}

.menu-item {
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    color: #303133;
    padding: 0 20px;
    cursor: pointer;
    position: relative;
    -webkit-transition: border-color 0.3s, background-color 0.3s, color 0.3s;
    transition: border-color 0.3s, background-color 0.3s, color 0.3s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    white-space: nowrap;
}

.icon {
    line-height: 1; //使用1可以垂直居中
    display: inline-block;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
}

.menu-item-title {
    display: inline;
}
</style>
