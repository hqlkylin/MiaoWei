using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;

namespace MiaoWei.Controllers
{
    public class HomeController : Controller
    {
        public static int c = 0;
        public ActionResult Index()
        {
           
            return View();
        }

        public ActionResult Index2()
        {

            string[] mf3 = {  
                              
                                "http://hd.jimei.com.cn",
                                "http://hd.jimei.com.cn/activity/activityProduct!getdapinpaiProduncts.html",
                                "http://hd.jimei.com.cn/activity/activityProduct!getxingliliangProduncts.html",
                                "http://hd.jimei.com.cn/activity/activityProduct!jiaJuProductList.html",
                                "http://hd.jimei.com.cn/activity/activityProduct!jianCaiProductList.html",
                                "http://hd.jimei.com.cn/activity/activityProduct!zhouZhuangZiList.html",
                                "http://hd.jimei.com.cn/1212/lugouqiao.jsp",
                                "http://hd.jimei.com.cn/1212/yanjiao.jsp",
                                "http://hd.jimei.com.cn/activity/activityProduct!synGetCouponProduncts.html?stime=2014-12-08",
                                "http://hd.jimei.com.cn/activity/activityProduct!synGetCouponProduncts.html?stime=2014-12-09",
                                "http://hd.jimei.com.cn/activity/activityProduct!synGetCouponProduncts.html?stime=2014-12-11",
                                "http://hd.jimei.com.cn/activity/activityProduct!synGetCouponProduncts.html?stime=2014-12-12",
                           };
            Random rd = new Random();
            var i=rd.Next(mf3.Length);
            HttpClient client = new HttpClient();
            string content = client.GetStringAsync(mf3[i]).Result;
            c++;
            return Json(new { c = c, msg = mf3[i] }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult headList()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}