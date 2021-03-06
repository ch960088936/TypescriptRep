﻿/// <reference path="../../reference.ts" />
module OEEDemos {
    export class DowntimeCharts implements ModuleBase {
        ppaServiceContext = new AicTech.PPA.DataModel.PPAEntities({
            name: 'oData',
            oDataServiceHost: 'http://192.168.0.3:6666/Services/PPAEntitiesDataService.svc'
        });
        view: JQuery;
        viewModel= kendo.observable({
            series: [{
                id: "",
                dtTime: 0,
                dtCauId:""
            }]
        });
        equipmentTree: Navigations;

        constructor() { }

        private initCharts(): void {
            $("#dtCharts").kendoChart({
                title: {
                    text:"DownTime Chart"
                },
                legend: {
                    position:"top"
                },
                seriesDefaults: {
                    type:"column"
                },
                series: [{
                    field:"dtTime"
                }],
                categoryAxis: [{
                    field: "dtCauId",
                    majorGridLines: {
                        visible: false
                    }
                }],
                valueAxis: [{
                    
                }],
                tooltip: {
                    visible: true,
                    template:"#= dataItem.id # : #= value #mins"
                }
            });
        }

        private testData(): void {
            var equipTree = new Navigations($('#equipTree'), {
                select: function (e) {
                    onselectNode(e, this);
                }
            });

            var onselectNode = function (e: kendo.ui.TreeViewSelectEvent, sender) {
                var equId = sender.dataItem(e.node).id;
                var dtInstance = ModuleLoad.getModuleInstance("DowntimeCharts");
                dtInstance.ppaServiceContext.PPA_DT_RECORD
                    .filter(function (it) { return it.EQP_ID === this.eqid }, { eqid: equId })
                    .map((it) => {
                        return {
                            id: it.EQP_ID,
                            startTime: it.DT_START_TIME,
                            endTime: it.DT_END_TIME,
                            dtCauId: it.DT_CAU_ID,
                            recNo: it.REC_NO
                        }
                    })
                    .toArray((re) => {
                        if (re.length === 0) {
                            alert("There are no DownTime-datas for this equipment!");
                            return;
                        }
                        var data = [];
                        var hash = [];
                        re.forEach(function (it) {
                            var curDtTime = (it.endTime - it.startTime) / 60000;
                            if (curDtTime < 0) {
                                alert("The Record," + it.recNo + ", is invalid! Its` startTime is bigger than endTime!");
                                return;
                            }
                            if (typeof hash[it.dtCauId] === "undefined") {
                                hash[it.dtCauId] ={
                                    id: it.id,
                                    dtTime: curDtTime,
                                    dtCauId: it.dtCauId
                                };
                            } else {
                                hash[it.dtCauId].dtTime += curDtTime;
                            }
                        });

                        for (var key in hash) {
                            hash[key].dtTime = hash[key].dtTime.toFixed(2);
                            data.push(hash[key]);
                        }
                        dtInstance.viewModel.set("series", data);
                    });
            };

            kendo.ui.progress($('#equipTree'), true);
            this.ppaServiceContext.PM_EQUIPMENT.map((it) => {
                return {
                    id: it.EQP_ID,
                    parent: it.PARENT,
                    text: it.NAME
                }
            }).toArray(function (data) {
                equipTree.setData(AppUtils.getTree(data, '-'));
                kendo.ui.progress($("#equipTree"), false);
            });

            this.equipmentTree = equipTree;
        }

        init(view: JQuery): void {
            this.view = view;
            $('#content').append(this.view);
            this.initCharts();
            kendo.bind(this.view, this.viewModel);
            this.testData();
        }

        update(): void {
            $('#content').append(this.view);
            this.initCharts();
            //alert("DowntimeUpdate()");
        }

        destory(): void {
            //alert("DowntimeDetory()");
        }
    }
}