import Ct from "../../components/coloredText/ColoredText";
import But from "../../components/button/But";
import Card2 from "../../components/card2/Card2";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./feed.css";

var gonews = {
  status: "ok",
  totalResults: 1334,
  articles: [
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Jon Fingas",
      title:
        "Apple's mixed reality headset reportedly uses iris scanning for payments and sign-ins",
      description:
        "Apple's long-rumored AR/VR headset may have a few extra tricks. The Information's sources claim the mixed reality hardware will use iris scanning for signing in and making payments. This would make it easier to buy apps and could even simplify multi-user supp…",
      url: "https://www.engadget.com/apple-mixed-reality-headset-iris-scanning-153036223.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-images/2019-11/e9503250-0485-11ea-92f9-f25df63dfb60",
      publishedAt: "2022-10-14T15:30:36Z",
      content:
        "Apple's long-rumored AR/VR headset may have a few extra tricks. The Information's sources claim the mixed reality hardware will use iris scanning for signing in and making payments. This would make i… [+1599 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Mat Smith",
      title: "The Morning After: Netflix with ads launches on November 3rd",
      description:
        "Netflix's ad-supported tier finally has a release date. The new Basic with Ads plan will be available November 3rd from 12 PM ET for $7 per month. It launches in 12 countries: the US, UK, Australia, Brazil, Canada, France, Germany, Italy, Japan, Mexico, South…",
      url: "https://www.engadget.com/the-morning-after-netflix-with-ads-launches-on-november-3rd-111528581.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-08/48c04b60-2177-11ed-9d7f-24f47864f1ae",
      publishedAt: "2022-10-14T11:15:28Z",
      content:
        "Netflix's ad-supported tier finally has a release date. The new Basic with Ads plan will be available November 3rd from 12 PM ET for $7 per month. It launches in 12 countries: the US, UK, Australia, … [+3662 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "David Nield",
      title:
        "How to use the iOS and Android File Apps to Clean, Share, and More",
      description:
        "File management has only recently arrived on smartphones in a serious way, but the default Files apps that now appear on Android and iOS are now steadily growing in terms of the functions and features they offer. In not much time at all, we’ve got from not be…",
      url: "https://gizmodo.com/ios-android-file-apps-hidden-functions-how-to-share-1849650271",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/52533f00eb8778703dedeee773904627.jpg",
      publishedAt: "2022-10-14T13:00:00Z",
      content:
        "File management has only recently arrived on smartphones in a serious way, but the default Files apps that now appear on Android and iOS are now steadily growing in terms of the functions and feature… [+5032 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Catherine Thorbecke",
      title: "What to do with your old phones, gadgets and other e-waste",
      description:
        "In the past two months, Apple, Google and Samsung have all unveiled their newest smartphones and other devices with the goal of getting consumers to upgrade ahead of the holidays. But in the process, these and other companies may also be adding to a growing p…",
      url: "https://www.cnn.com/2022/10/14/tech/e-waste-tips/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/220726123209-06-electronic-waste-explainer.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-10-14T12:40:04Z",
      content:
        "In the past two months, Apple, Google and Samsung have all unveiled their newest smartphones and other devices with the goal of getting consumers to upgrade ahead of the holidays. But in the process,… [+3961 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Lisa Morrow, CNN",
      title: "Cappadocia: One of Turkey's most spectacular hiking destinations",
      description:
        "A rich palette of shimmering caramel swirls, ochers, creams and pinks unfolds across the landscape like an enormous handwoven carpet. Stands of poplars line paths carved by ancient lava flows from three now extinct volcanoes, crisscrossing valleys studded wit…",
      url: "https://www.cnn.com/travel/article/cappadocia-turkey-hiking/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/221014112431-cappadocia-tz-1-super-tease.jpg",
      publishedAt: "2022-10-14T12:45:03Z",
      content:
        "(CNN) A rich palette of shimmering caramel swirls, ochers, creams and pinks unfolds across the landscape like an enormous handwoven carpet. Stands of poplars line paths carved by ancient lava flows f… [+7153 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Chipmaker TSMC's shares leap after quarterly profit beats estimates - Reuters.com",
      description:
        'TSMC <a href="https://www.reuters.com/companies/2330.TW" target="_blank">(2330.TW)</a> shares jumped more than 4% on Friday morning outperforming the broader market <a href="https://www.reuters.com/quote/.TWII" target="_blank">(.TWII)</a>, after the Taiwanese…',
      url: "https://www.reuters.com/technology/chipmaker-tsmcs-shares-leap-after-quarterly-profit-beats-estimates-2022-10-14/",
      urlToImage:
        "https://www.reuters.com/resizer/9YJ9035GeoqqL7jVCthVrgQQ9gk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6JUUHCPG2NK5RN7CJXBK26JQKU.jpg",
      publishedAt: "2022-10-14T01:07:00Z",
      content:
        "TAIPEI, Oct 14 (Reuters) - TSMC (2330.TW) shares jumped more than 4% on Friday morning outperforming the broader market (.TWII), after the Taiwanese chipmaker announced a forecast-beating third-quart… [+546 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Gwilym Mumford",
      title: "From Britbox to Shudder, the best niche streaming services",
      description:
        "Whether you’re after horror, arthouse, reality TV or teatime crime, don’t be afraid to look past the ‘big five’A couple of weeks ago, we offered up a streaming guide for these cost of living-tinged times, looking at the positives and negatives of the “big fiv…",
      url: "https://www.theguardian.com/culture/2022/oct/14/the-guide-best-small-streaming-services-paramount-shudder-mubi",
      urlToImage:
        "https://i.guim.co.uk/img/media/292cb9467bfaa4184efd5f92ec4d7d1638587fd5/0_28_1920_1152/master/1920.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=19fd6f19ecf47c0f70dc665e1ccaaf7d",
      publishedAt: "2022-10-14T10:55:40Z",
      content:
        "A couple of weeks ago, we offered up a streaming guide for these cost of living-tinged times, looking at the positives and negatives of the big five platforms (Amazon Prime Video, Apple TV+, Disney+,… [+9007 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Rebecca Nicholson",
      title:
        "Shantaram review – Eat Pray Love with added hunk? Disappointingly not",
      description:
        "Not even Charlie Hunnam constantly taking his top off can save Apple TV+’s new thriller about an ex-convict in Bombay. And don’t get me started on the accentsShantaram (Apple TV+) is an adaptation of Gregory David Roberts’ weighty 2003 novel of self-discovery…",
      url: "https://www.theguardian.com/tv-and-radio/2022/oct/14/shantaram-review-eat-pray-love-with-added-hunk-disappointingly-not",
      urlToImage:
        "https://i.guim.co.uk/img/media/2ebcaa2948c05982ff8cc5a1849ef9b0677cee0f/0_541_8109_4865/master/8109.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTIucG5n&enable=upscale&s=a831437a18529fbbb1ba87d38b671882",
      publishedAt: "2022-10-14T05:00:28Z",
      content:
        "Shantaram (Apple TV+) is an adaptation of Gregory David Roberts weighty 2003 novel of self-discovery. I admit that I was expecting a sort of Eat Pray Love, with added hunk. It turns out to be a bit o… [+3588 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Phil Harrison",
      title:
        "The Peripheral to Chapelwaite: the seven best shows to stream this week",
      description:
        "Chloë Grace Moretz stars in a dystopian drama about virtual reality getting horribly out of hand, and Adrien Brody serves up a horror with jump-scares galore Continue reading...",
      url: "https://www.theguardian.com/tv-and-radio/2022/oct/14/the-peripheral-to-chapelwaite-the-seven-best-shows-to-stream-this-week",
      urlToImage:
        "https://i.guim.co.uk/img/media/1fb6a3d5266bc2c44149fbdd19102a6feb700efe/0_38_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=35889e7474957403aefcebb819989039",
      publishedAt: "2022-10-14T06:00:29Z",
      content:
        "Pick of the week\r\nThe Peripheral\r\nA starry and stylish adaptation of William Gibsons novel, this sci-fi series posits a near future in which virtual evolution has outpaced societal development. In a … [+4838 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Hadley Freeman",
      title:
        "Aubrey Plaza: ‘I totally care what people think and I wish that I didn’t’",
      description:
        "The actor notorious for playing sardonic oddballs on loving Danny DeVito, keeping up with her Parks and Rec co-stars and why she’s nowhere as kooky in real lifeThe night before Aubrey Plaza and I met up, she went to the premiere of her latest film, Emily the …",
      url: "https://www.theguardian.com/film/2022/oct/14/aubrey-plaza-i-totally-care-what-people-think-and-i-wish-that-i-didnt",
      urlToImage:
        "https://i.guim.co.uk/img/media/3a2c95bb06bb4af410c8e2af166d964bd64093ca/0_406_2668_1600/master/2668.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a3b14ea24a8ca38fcd95074842196352",
      publishedAt: "2022-10-14T07:00:30Z",
      content:
        "The night before Aubrey Plaza and I met up, she went to the premiere of her latest film, Emily the Criminal, at the London film festival, and was surprised to see an old friend in the audience. It wa… [+11547 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Tim Hardwick",
      title: "Video Demonstrates Semi-Functional AirPower Prototype in Action",
      description:
        "Back in August, a video of an AirPower prototype gave us a closer look at Apple's abandoned wireless charging device, but the unit was not functional in any practical way. Now, thanks to a collaboration between YouTube channels Apple Demo and Unbox Therapy, w…",
      url: "https://www.macrumors.com/2022/10/14/video-of-working-airpower-prototype/",
      urlToImage:
        "https://images.macrumors.com/t/0yJe7aT4b-0r7LncWeXkcI376YY=/2486x/article-new/2022/10/working-airpower-prototype-apple-demo.jpg",
      publishedAt: "2022-10-14T10:46:09Z",
      content:
        "Back in August, a video of an AirPower prototype gave us a closer look at Apple's abandoned wireless charging device, but the unit was not functional in any practical way. Now, thanks to a collaborat… [+3301 chars]",
    },
    {
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "msmash",
      title:
        "Apple's Mixed Reality Headset To Offer Iris Scanning for Payments, Logging In",
      description:
        "By the time Apple introduces its much-anticipated mixed reality headset -- planned for sometime next year -- Meta Platforms will have had the advantage of selling products in the category to the public for almost seven years. But Apple's device will also have…",
      url: "https://apple.slashdot.org/story/22/10/14/1336252/apples-mixed-reality-headset-to-offer-iris-scanning-for-payments-logging-in",
      urlToImage: "https://a.fsdn.com/sd/topics/apple_64.png",
      publishedAt: "2022-10-14T14:00:00Z",
      content:
        "For example, Apple's device is expected to have the ability to scan the irises of people wearing the headsets so they can quickly log into their accounts simply by putting the devices on their heads,… [+981 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "jerb@insider.com (Jordan Parker Erb)",
      title: "What to expect from Netflix's new subscription with ads",
      description:
        "A cheaper Netflix subscription with ads is coming in November. We explain how much it will cost and what to expect from the service.",
      url: "https://www.businessinsider.com/netflix-with-ads-cost-heres-what-to-expect-2022-10",
      urlToImage:
        "https://i.insider.com/634871605bbbbe00187832b6?width=1200&format=jpeg",
      publishedAt: "2022-10-14T10:35:00Z",
      content:
        'Friday is officially here, and something else is almost here: Netflix with ads. \r\nAfter months of talking about it, Netflix has finally released more details about its newest subscription tier, "Basi… [+4144 chars]',
    },
    {
      source: {
        id: null,
        name: "Entrepreneur",
      },
      author: "Emily Washcovick",
      title: "Using Customer Behavior to Maximize Your Online Presence",
      description:
        "We know that digital presence is a critical part of business strategy, but how can business owners and marketing managers ensure that their plans are effective?",
      url: "https://www.entrepreneur.com/growing-a-business/using-customer-behavior-to-maximize-your-online-presence/437251",
      urlToImage:
        "https://assets.entrepreneur.com/content/3x2/2000/1665758627-SOCi-Entrepreneurimage.jpg",
      publishedAt: "2022-10-14T14:44:59Z",
      content:
        "Behind the Review host and Yelp's Small Business Expert, Emily Washcovick, shares a look at this week's episode of the podcast.\r\nSOCi\r\nBusinesses come in many shapes and sizes, but they all have one … [+5034 chars]",
    },
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "Rubén Chicharro",
      title:
        "Brasil multa de nuevo a Apple por no incluir el cargador en la caja de los iPhone",
      description:
        "La decisión de no incluir cargador en las cajas de los iPhone como una medida medioambiental continúa pasándole factura a Apple, al menos, en Brasil. El tribunal estatal de São Paulo ha multado a la compañía de Cupertino con 100 millones de reales (unos 19 mi…",
      url: "https://hipertextual.com/2022/10/brasil-multa-apple-cargador-caja-iphone",
      urlToImage:
        "https://imgs.hipertextual.com/wp-content/uploads/2021/10/apple-trade-in-03.jpg",
      publishedAt: "2022-10-14T08:47:50Z",
      content:
        "La decisión de no incluir cargador en las cajas de los iPhone como una medida medioambiental continúa pasándole factura a Apple, al menos, en Brasil. El tribunal estatal de São Paulo ha multado a la … [+2100 chars]",
    },
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "Luis Miranda",
      title:
        "La desesperada idea de Google para que cambies tu iPhone por un Pixel 7",
      description:
        "Google quiere convencerte de que el Pixel 7 es mejor que un iPhone y para demostrarlo ha lanzado una oferta tentadora. La tecnológica está ofreciendo más de 1000 dólares en valor de intercambio a los dueños de un iPhone 13, por lo que no tendrías que pagar un…",
      url: "https://hipertextual.com/2022/10/google-paga-iphone-13-cambio-pixel-7",
      urlToImage:
        "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/10/google-pixel-7-006.jpg?fit=1920%2C1080&quality=60&strip=all&ssl=1",
      publishedAt: "2022-10-14T00:20:00Z",
      content:
        "Google quiere convencerte de que el Pixel 7 es mejor que un iPhone y para demostrarlo ha lanzado una oferta tentadora. La tecnológica está ofreciendo más de 1000 dólares en valor de intercambio a los… [+2332 chars]",
    },
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "Rubén Chicharro",
      title:
        "Samsung anuncia One UI 5 con Android 13: estas son sus principales novedades",
      description:
        "Android 13 ya está disponible y, como es habitual, muchos de los fabricantes están aprovechando esta nueva versión para lanzar actualizaciones de sus respectivas capas de personalización. Samsung, por supuesto, es uno de ellos. La compañía ha anunciado oficia…",
      url: "https://hipertextual.com/2022/10/samsung-one-ui-5-android-13-novedades-moviles-compatibles",
      urlToImage:
        "https://imgs.hipertextual.com/wp-content/uploads/2022/10/samsung-one-ui-5-001.jpg",
      publishedAt: "2022-10-14T10:55:52Z",
      content:
        "Android 13ya está disponible y, como es habitual, muchos de los fabricantes están aprovechando esta nueva versión para lanzar actualizaciones de sus respectivas capas de personalización. Samsung, por… [+2662 chars]",
    },
    {
      source: {
        id: null,
        name: "Boing Boing",
      },
      author: "Peter Sheridan",
      title:
        'King Charles "purges" royal family in this week\'s dubious tabloids',
      description:
        "'National Enquirer'\n\n\n\n\"Kardashian Empire of Greed Busted!\" proclaims the cover story. But it's last week's news: that the SEC fined Kim Kardashian $1.26 million for failing to disclose that she had been paid to promote cryptocurrency. Sister Kylie is alleged…",
      url: "https://boingboing.net/2022/10/14/king-charles-purges-royal-family-in-this-weeks-dubious-tabloids.html",
      urlToImage:
        "https://i0.wp.com/boingboing.net/wp-content/uploads/2022/10/tabloids-charles.jpg?fit=1200%2C745&ssl=1",
      publishedAt: "2022-10-14T15:44:03Z",
      content:
        "\"Kardashian Empire of Greed Busted!\" proclaims the cover story. But it's last week's news: that the SEC fined Kim Kardashian $1.26 million for failing to disclose that she had been paid to promote cr… [+5745 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Javier Pastor",
      title:
        "Amazfit Falcon: un ambicioso reloj ultrarresistente que quiere conquistar a los deportistas más exigentes",
      description:
        "Los relojes inteligentes se han puesto serios este año. El lanzamiento de los Samsung Galaxy Watch5, los Apple Watch Ultra y los Google Pixel Watch abre una nueva división de dispositivos de gama alta, y Amazfit, que hasta ahora se había centrado en modelos m…",
      url: "https://www.xataka.com/wearables/amazfit-falcon-caracteristicas-precio-ficha-tecnica",
      urlToImage:
        "https://i.blogs.es/2bc606/captura-de-pantalla-2022-10-14-a-las-10.16.02/840_560.jpeg",
      publishedAt: "2022-10-14T08:22:15Z",
      content:
        "Los relojes inteligentes se han puesto serios este año. El lanzamiento de los Samsung Galaxy Watch5, los Apple Watch Ultra y los Google Pixel Watch abre una nueva división de dispositivos de gama alt… [+6148 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Eva Rodríguez de Luis",
      title:
        "Cazando Gangas en imagen, domótica y hogar: cinco smart TV 4K de 2022 con descuentazo, chollo HomePod Mini y una GoPro baratísima",
      description:
        "Entre el segundo Amazon Prime Day 2022 y el Black Friday también hay ofertas y aquí vas a encontrar las mejores: desde los Euros por pulgadas de MediaMarkt a los Tecnoprecios de El Corte Inglés pasando por La iRobot Week en Worten: estas son las mejores ofert…",
      url: "https://www.xataka.com/cazando-gangas/cazando-gangas-imagen-domotica-hogar-cinco-smart-tv-4k-2022-descuentazo-chollo-homepod-mini-gopro-baratisima",
      urlToImage: "https://i.blogs.es/cee259/gan/840_560.jpeg",
      publishedAt: "2022-10-14T08:31:30Z",
      content:
        "Entre el segundo Amazon Prime Day 2022 y el Black Friday también hay ofertas y aquí vas a encontrar las mejores: desde los Euros por pulgadas de MediaMarkt a los Tecnoprecios de El Corte Inglés pasan… [+5179 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "John Tones",
      title:
        "Holocaustos nucleares, superhéroes vintage y cadáveres de dioses en el espacio: lo mejor del cómic indie USA (Laberinto de Papel 3x07)",
      description:
        "En 'Laberinto de papel', el podcast de literatura fantástica que hacemos en Xataka en colaboración con la editorial Minotauro, también prestamos atención a los cómics. En esta ocasión echamos un vistazo a unos cuantos lanzamientos recientes de Planeta Cómic q…",
      url: "https://www.xataka.com/literatura-comics-y-juegos/holocaustos-nucleares-superheroes-vintage-cadaveres-dioses-espacio-mejor-comic-indie-usa-laberinto-papel-3x07",
      urlToImage:
        "https://i.blogs.es/a66534/post-laberinto-de-papel-3x07-comics/840_560.jpeg",
      publishedAt: "2022-10-14T09:31:31Z",
      content:
        "En 'Laberinto de papel', el podcast de literatura fantástica que hacemos en Xataka en colaboración con la editorial Minotauro, también prestamos atención a los cómics. En esta ocasión echamos un vist… [+2049 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "The Kim Komando Show",
      title:
        "7 things you should never throw away (or you could be in legal trouble)",
      description:
        "Everyone knows how to separate trash from recyclables, but there are special items like household batteries and smartphones that must be disposed of properly.",
      url: "https://www.foxnews.com/tech/7-things-you-should-never-throw-away-legal-trouble",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/10/BCHJBDLVUBINFEZWPTXKN5N5RA.jpeg",
      publishedAt: "2022-10-14T01:04:06Z",
      content:
        "By now, we all know how to separate trash from recyclables.\r\nBut what about the other things we no longer need? The answer is no if you're holding an old bottle of medication. Tap or click here to ch… [+8950 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Alex Blake",
      title: "3 key things I want to see in the next MacBook Pro",
      description:
        "The next MacBook Pro is due for release any time now, and there are three important ways Apple can improve it to make it even better than its predecessor.",
      url: "https://www.digitaltrends.com/computing/3-key-things-in-next-macbook-pro/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2022/09/Apple-MacBook-Pro-14-angle.jpg?p=1",
      publishedAt: "2022-10-14T13:30:16Z",
      content:
        "When Apple unveiled its new 14-inch and 16-inch MacBook Pro laptops in October 2021, it was the biggest improvement to the device in years. One year on, were expecting an imminent refresh to both lap… [+4102 chars]",
    },
    {
      source: {
        id: null,
        name: "The New Yorker",
      },
      author: "Hannah Goldfield",
      title: "Le Rock Goes Long on Midtown",
      description:
        "Dressed crab, bison au poivre, and a twist on baba au rhum are just a few of the many offerings at the buzzy new Rockefeller Center restaurant from the chefs behind Tribeca’s Frenchette, Hannah Goldfield writes.",
      url: "https://www.newyorker.com/magazine/2022/10/24/le-rock-goes-long-on-midtown",
      urlToImage:
        "https://media.newyorker.com/photos/63471e77ebf0c2ba7bdd4443/16:9/w_1280,c_limit/221024_r41208.jpg",
      publishedAt: "2022-10-14T10:00:00Z",
      content:
        "What to wear to Le Rock, perhaps the buzziest of a collection of buzzy new restaurants in Rockefeller Center? On a recent Friday night, my dinner companion settled on a canvas jacket somewhere betwee… [+4107 chars]",
    },
    {
      source: {
        id: null,
        name: "Asawicki.info",
      },
      author: null,
      title: "Hello World Under the Microscope",
      description: "Comments",
      url: "https://asawicki.info/articles/Hello_world_under_the_microscope.php5",
      urlToImage: null,
      publishedAt: "2022-10-14T10:48:08Z",
      content:
        "Authors: Adam Sawicki, Mateusz Jurczyk and Gynvael Coldwind.\r\nThis article was originally published in Polish in issue 100 (1/2022) of the Programista magazine in February 2022. Below you can find En… [+58103 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Ben Schwan",
      title:
        "Fehlendes iPhone-Netzteil: Apple soll in Brasilien 20 Millionen Euro zahlen",
      description:
        'Ein Gericht in Sao Paulo hat Apple zu einer "sozialen Strafe" verdonnert, weil der Konzern beim iPhone kein Netzteil mitliefert.',
      url: "https://www.heise.de/news/Fehlendes-iPhone-Netzteil-Apple-soll-in-Brasilien-20-Millionen-Euro-zahlen-7308606.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/2/6/7/3/5/MU7V2_GEO_EMEA-d6fa523c3433699c.png",
      publishedAt: "2022-10-14T09:38:00Z",
      content:
        "Apple hat in Brasilien eine empfindliche Strafe aufgebrummt bekommen, weil der Konzern sich seit zwei Jahren weigert, bei seinem iPhone ein Netzteil beizulegen. Der schon seit Längerem brodelnde Stre… [+2532 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Ben Schwan",
      title: "iPhone 14 Plus: Verkäufe angeblich geringer als erwartet",
      description:
        "Berichten aus der asiatischen Lieferkette zufolge hatte sich Apple von seinem neuen großen Standard-iPhone mehr erwartet. Die Pro-Modelle gleichen das wohl aus.",
      url: "https://www.heise.de/news/iPhone-14-Plus-Verkaeufe-angeblich-geringer-als-erwartet-7308556.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/2/6/7/0/5/AppleIphone14Plus_-_4-d8b3d614636a764b-5d4f603dc46361a9.jpg",
      publishedAt: "2022-10-14T09:27:00Z",
      content:
        "Apples neues iPhone 14 Plus ist seit einer Woche auf dem Markt. Einem Bericht aus Taiwan zufolge läuft das Geschäft mit dem neuen Standard-iPhone, das erstmals mit einem 6,7 Zoll großen Bildschirm au… [+2441 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Malte Kirchner",
      title:
        "Apple blickt in den Augapfel: Angeblich Iris-Scanner im Mixed-Reality-Headset",
      description:
        "Ein neuer Bericht untermauert Gerüchte rund um Apples für 2023 vermutetes Mixed-Reality-Headset. Eine auf die Iris gerichtete Kamera erfüllt mehrere Zwecke.",
      url: "https://www.heise.de/news/Apple-blickt-in-den-Augapfel-Angeblich-Iris-Scanner-im-Mixed-Reality-Headset-7309341.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/2/7/1/5/1/shutterstock_1738735427-a2f99bbaa14f4112.jpg",
      publishedAt: "2022-10-14T15:15:00Z",
      content:
        "Nach der Gesichtserkennung Face ID und dem Fingerabdruck Scanner Touch ID plant Apple mit seinem Mixed-Reality-Headset angeblich die Einführung einer dritten biometrischen Art von Zugangskontrolle. E… [+2518 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Leo Becker",
      title:
        "heise+ | iOS 16 und watchOS 9: Tipps und Tricks zu den besten Neuerungen",
      description:
        "Von Sperrbildschirmen mit wechselnden Hintergründen bis hin zu flexiblerem Training mit der Watch: 15 Tipps, um iOS 16 und watchOS 9 optimal einzusetzen.",
      url: "https://www.heise.de/ratgeber/iOS-16-und-watchOS-9-Tipps-und-Tricks-zu-den-besten-Neuerungen-7307692.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/2/6/2/3/8/Bildschirm_foto_2022-10-13_um_15.33.30-21084169f96c19c8.png",
      publishedAt: "2022-10-14T07:00:00Z",
      content:
        "Inhaltsverzeichnis\r\nVon flexiblen Sperrbildschirmen mit wechselnden Fotohintergründen und Informations-Widgets über eine Batterieprozentanzeige bis hin zur haptischen iPhone-Tastatur: Unsere Tipps er… [+2027 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Mark Mantel",
      title: "Rasanter Einbruch: PC-Markt nur noch auf Vor-Pandemie-Niveau",
      description:
        "Der PC-Markt brach im dritten Quartal 2022 um 15 bis 20 Prozent ein. Vom Wachstum während der Coronavirus-Pandemie ist nichts mehr übrig.",
      url: "https://www.heise.de/news/Rasanter-Einbruch-PC-Markt-nur-noch-auf-Vor-Pandemie-Niveau-7309001.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/2/6/9/6/7/Komplett_PC_innen_ct-f920fae3ea52bdc4.jpg",
      publishedAt: "2022-10-14T12:44:00Z",
      content:
        'So schnell der PC-Markt mit dem Beginn der Coronavirus-Pandemie wuchs, so schlagartig fiel er dieses Jahr wieder ab. Schon im Juni beschrieb das Marktforschungsteam von Gartner einen "perfekten Sturm… [+3519 chars]',
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Benjamin Mayo",
      title: "Apple TV+ Guide: Every Apple TV show and movie available now",
      description:
        "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $4.99 per month. Here’s every Apple original television show and movie avai…",
      url: "https://9to5mac.com/2022/10/14/apple-tv-plus-tv-shows-movies-guide/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/12/apple-tv-plus.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-10-14T09:02:51Z",
      content:
        "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $4.99 per month… [+51773 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Benjamin Mayo",
      title: "Shantaram TV show arrives on Apple TV+",
      description:
        "The novel Shantaram is a modern classic of fiction. And now, a TV series adaptation of Shantaram premieres today on Apple TV+, starring Charlie Hunnam in the lead role … Shantaram is set in the underworld of Bombay. Hunnam’s character is a man called Lin Ford…",
      url: "https://9to5mac.com/2022/10/13/shantaram-tv-show-arrives-on-apple-tv/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/10/apple-tv-shantaram-header.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-10-14T03:57:00Z",
      content:
        "The novel Shantaram is a modern classic of fiction. And now, a TV series adaptation of Shantaram premieres today on Apple TV+, starring Charlie Hunnam in the lead role …\r\nShantaram is set in the unde… [+1488 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "Apple contractor fired after her day-in-the-life TikTok video went viral",
      description:
        "An Apple contractor was fired – or “unexpectedly found that her contract wasn’t renewed” – after a day-in-the-life TikTok video went viral.\nNylah Boone’s “Day in the life of a Black girl working in tech” video didn’t reveal any secret goings-on within the com…",
      url: "https://9to5mac.com/2022/10/14/apple-contractor-fired/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/10/Apple-contractor-fired.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-10-14T14:10:50Z",
      content:
        "An Apple contractor was fired or “unexpectedly found that her contract wasn’t renewed” after a day-in-the-life TikTok video went viral.\r\nNylah Boone’s “Day in the life of a Black girl working in tech… [+4351 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "Apple TV+ gets closer to Hulu in the US while Amazon Prime Video lost subscribers",
      description:
        "Back in September, JustWatch reported that Apple TV+ surpassed 6% global market share of the streaming market, while some of its competitors lost subscribers. Now JustWatch is back with a new report, this time with market share data from streaming platforms i…",
      url: "https://9to5mac.com/2022/10/13/apple-tv-gets-closer-to-hulu-in-the-us/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/07/apple-tv-market-share.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-10-14T01:19:36Z",
      content:
        "Back in September, JustWatch reported that Apple TV+ surpassed 6% global market share of the streaming market, while some of its competitors lost subscribers. Now JustWatch is back with a new report,… [+2238 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "Apple execs Craig Federighi and Greg Joswiak speaking at WSJ Tech Live event",
      description:
        "Senior Apple execs Craig Federighi and Greg Joswiak are among the speakers for the tech leadership conference WSJ Tech Live.\nTickets for the exclusive event originally started at $4,000, but now only $5,500 tickets remain, and are only available to senior exe…",
      url: "https://9to5mac.com/2022/10/14/apple-execs/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/10/Apple-execs.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-10-14T11:13:03Z",
      content:
        "Senior Apple execs Craig Federighi and Greg Joswiak are among the speakers for the tech leadership conference WSJ Tech Live.\r\nTickets for the exclusive event originally started at $4,000, but now onl… [+3482 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Benjamin Mayo",
      title:
        "Report: Apple AR/VR headset includes iris scanning biometrics to switch user accounts and authenticate payments",
      description:
        "Apple’s mixed reality headset is set to feature iris scanning biometrics features, enabling capabilities similar to the Face ID biometrics system found in modern iPhones and iPads. According to a report from The Information, ‘Iris ID’ would allow the user to …",
      url: "https://9to5mac.com/2022/10/14/apple-headset-iris-scanning-report/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/06/apple-headset-render.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-10-14T13:08:47Z",
      content:
        "Apple’s mixed reality headset is set to feature iris scanning biometrics features, enabling capabilities similar to the Face ID biometrics system found in modern iPhones and iPads. According to a rep… [+2408 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Michael Potuck",
      title:
        "mophie powerstation plus combines integrated Lightning/USB-C cables and fast charging",
      description:
        "mophie is out with its newest portable battery today that offers a convenient experience for Apple users. With built-in Lightning and USB-C cables plus an extra USB-C port, the powerstation plus makes it seamless to juice up iPhone, iPad, AirPods, and more wi…",
      url: "https://9to5mac.com/2022/10/14/mophie-powerstation-plus-built-in-cables-iphone-ipad-airpods/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/10/mophie-powerstation-plus.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-10-14T15:41:47Z",
      content:
        "mophie is out with its newest portable battery today that offers a convenient experience for Apple users. With built-in Lightning and USB-C cables plus an extra USB-C port, the powerstation plus make… [+1582 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "Twitter wants to bring its Spaces live audio feature to Communities",
      description:
        "Twitter has been investing a lot in its Spaces live audio platform, which lets users join audio chats with a bunch of other people. Now the company wants to take that experience even further, this time bringing the Spaces feature to Twitter Communities.\n more…",
      url: "https://9to5mac.com/2022/10/13/twitter-spaces-communities/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/10/Twitter-Community-Spaces.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-10-14T00:00:44Z",
      content:
        "Twitter has been investing a lot in its Spaces live audio platform, which lets users join audio chats with a bunch of other people. Now the company wants to take that experience even further, this ti… [+2406 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "Twitter acquisition saga continues, each side saying the other is under federal investigation",
      description:
        "There’s still no end in sight to the Elon Musk Twitter acquisition saga. Despite the two parties both expressing their intention to complete the deal, the lawsuit between the two is only on hold – and now Musk and Twitter are each claiming that the other side…",
      url: "https://9to5mac.com/2022/10/14/twitter-acquisition/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/10/Twitter-acquisition.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-10-14T12:06:16Z",
      content:
        "There’s still no end in sight to the Elon Musk Twitter acquisition saga. Despite the two parties both expressing their intention to complete the deal, the lawsuit between the two is only on hold and … [+3422 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "Stunning cinematic iPhone 14 Pro videography shows what can be done – with enough talent!",
      description:
        "Filmmaker Joey Helms has produced a stunning example of cinematic iPhone 14 Pro videography, complete with a tutorial video on how you could do the same.\nWhile Helms does use two add-ons, this is not your usual “technically shot on iPhone but using a complete…",
      url: "https://9to5mac.com/2022/10/14/cinematic-iphone-14/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/10/Cinematic-iPhone-14.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-10-14T12:57:03Z",
      content:
        "Filmmaker Joey Helms has produced a stunning example of cinematic iPhone 14 Pro videography, complete with a tutorial video on how you could do the same.\r\nWhile Helms does use two add-ons, this is no… [+3344 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Police",
      },
      author: "Karandeep Singh",
      title: "New budget phone vs. old flagship: Which is best for you?",
      description:
        "Everyone wants the best bang for their buck, but your priorities may vary",
      url: "https://www.androidpolice.com/new-budget-phone-vs-old-flagship/",
      urlToImage:
        "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/07/Pixel-6a-review-renamed-with-dashes-(13).JPG",
      publishedAt: "2022-10-14T10:30:14Z",
      content:
        "Newer technology is always exciting, but there's also that excellent flagship from the previous year that you can snag for a sweet discount. It's a classic tech conundrum: to buy a new budget phone o… [+9341 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Police",
      },
      author: "Rachit Agarwal",
      title: "The 8 most common Spotify problems with simple fixes",
      description:
        "Spotify is among the most popular streaming music services that usually works perfectly. If you're having problems, here are the most common fixes.",
      url: "https://www.androidpolice.com/common-spotify-problems-fixes/",
      urlToImage:
        "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/10/spotify-common-issues-feature.jpg",
      publishedAt: "2022-10-14T10:01:13Z",
      content:
        "With more than 400 million active monthly users, Spotify has a lock on streaming audio. Despite facing tough competition from YouTube Music and Apple Music, Spotify remains the favorite among users t… [+8397 chars]",
    },
    {
      source: {
        id: null,
        name: "Genbeta.com",
      },
      author: "Marcos Merino",
      title:
        "El nuevo plan barato de Netflix tiene un problema, y no son los anuncios: compartir cuenta sigue saliendo mucho más a cuenta",
      description:
        "Netflix anunció ayer por la tarde el inminente lanzamiento de su nuevo plan con anuncios. Tras haber planteado ya en junio sus planes para ofrecer suscripciones más baratas a cambio de aceptar la visualización de publicidad, ya sabemos que -a partir del 10 de…",
      url: "https://www.genbeta.com/actualidad/nuevo-plan-barato-netflix-tiene-problema-no-anuncios-compartir-cuenta-sigue-saliendo-mucho-a-cuenta",
      urlToImage: "https://i.blogs.es/251adb/netflix1/840_560.jpg",
      publishedAt: "2022-10-14T11:09:19Z",
      content:
        "Netflix anunció ayer por la tarde el inminente lanzamiento de su nuevo plan con anuncios. Tras haber planteado ya en junio sus planes para ofrecer suscripciones más baratas a cambio de aceptar la vis… [+3419 chars]",
    },
    {
      source: {
        id: "vice-news",
        name: "Vice News",
      },
      author: "Rachel Cheung, Alan Wong",
      title:
        "‘Beijing’ Censored in China After Rare Protest Against President Xi Jinping",
      description:
        "“Depose the traitorous dictator Xi Jinping,” read a banner briefly displayed on a bridge.",
      url: "https://www.vice.com/en/article/v7vpaj/protest-against-xi-jinping-beijing-sitong-bridge",
      urlToImage:
        "https://video-images.vice.com/articles/6348f0f1edd9480094d47019/lede/1665724658361-fe7wup7xgaavzje.jpeg?image-resize-opts=Y3JvcD0xeHc6MC45MzIxODMwNjkyMjQzNTM3eGg7Y2VudGVyLGNlbnRlciZyZXNpemU9MTIwMDoqJnJlc2l6ZT0xMjAwOio",
      publishedAt: "2022-10-14T06:41:21Z",
      content:
        "China’s censorship machine has gone into overdrive after a man hung two banners on a highway overpass in Beijing on Thursday denouncing Chinese leader Xi Jinping and his authoritarian rule. \r\n“Depose… [+2864 chars]",
    },
    {
      source: {
        id: null,
        name: "Food52.com",
      },
      author: "Linni Kral",
      title: "The Hills Are Alive With the Sound of Cheesemaking",
      description:
        "We’ve teamed up with Europe Home of Cheese: Austrian Cheese to share all the beauty—and allll the cheese—that Austria has to offer. Austria’s mountainous landscape is home to 100% GMO-free dairy production, which makes for some truly iconic and undeniably del…",
      url: "https://food52.com/blog/27632-a-brief-history-of-austrian-cheese",
      urlToImage:
        "https://images.food52.com/UkYDaSerb5fNZoBhSHc85ICqt44=/fit-in/1200x1200/70a13109-3bab-4545-95e1-9f8817ac2c2f--austriancheese_hero.png",
      publishedAt: "2022-10-14T14:00:00Z",
      content:
        "Weve teamed up with Europe Home of Cheese: Austrian Cheese to share all the beautyand allll the cheesethat Austria has to offer. Austrias mountainous landscape is home to 100% GMO-free dairy producti… [+5831 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title:
        "Zuckerberg takes on Apple, AI takes on Steve Jobs, and Ask Apple Developer launches",
      description:
        "If you only listen to one podcast, listen to this week's AppleInsider Podcast. But, if you listen to two, you've got to check out the show that uses AI to make it sound as if Steve Jobs is alive again.The Meta Quest Pro, in simulated useAfter all the launches…",
      url: "https://appleinsider.com/articles/22/10/14/zuckerberg-takes-on-apple-ai-takes-on-steve-jobs-and-ask-apple-developer-launches",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/50786-100268-meta-quest-pro-xl.jpg",
      publishedAt: "2022-10-14T12:37:48Z",
      content:
        "The Meta Quest Pro, in simulated use\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nIf you only listen to one podcast, listen to this week's AppleInsider… [+2982 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title: "Apple may want more Sunday Ticket flexibility than NFL will give",
      description:
        "Sunday Ticket talks between Apple TV+ and the NFL are said to have been slowed down by complex rights issues, with Apple looking for fewer restrictions.The long-rumored deal for Apple TV+ to stream NFL Sunday Ticket was once even reported to have been conclud…",
      url: "https://appleinsider.com/articles/22/10/14/apple-may-want-more-sunday-ticket-flexibility-than-nfl-will-give",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/47303-92228-43068-83676-000-lead-NFL-xl-xl.jpg",
      publishedAt: "2022-10-14T13:05:06Z",
      content:
        "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nSunday Ticket talks between Apple TV+ and the NFL are said to have been slowed down by complex rights issue… [+1501 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title: "Oklahoma Apple Store staff to vote on labor union",
      description:
        "Almost 100 workers at Apple Penn Square, Oklahoma, are to vote on forming a labor union, potentially making it the second US Apple Store to unionize.Staff at Apple Penn Square previously filed a petition with the National Labor Relations Board in the hopes of…",
      url: "https://appleinsider.com/articles/22/10/14/oklahoma-apple-store-staff-to-vote-on-labor-union",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/50193-98552-000-lead-Apple-Penn-Square-xl.jpg",
      publishedAt: "2022-10-14T09:46:56Z",
      content:
        "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nAlmost 100 workers at Apple Penn Square, Oklahoma, are to vote on forming a labor union, potentially making… [+1552 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title: "Apple AR headset could use iris scanning for user identification",
      description:
        "A new report claims that Apple Glass, or other Apple AR headsets, could use iris detection instead of Face ID or Touch ID.The Apple VR headset could be announced in 2023The report, published on Friday morning by The Information claims that two unspecified sou…",
      url: "https://appleinsider.com/articles/22/10/14/apple-ar-headset-could-use-iris-scanning-for-user-identification",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/46189-96987-Apple-VR-table-xl.jpg",
      publishedAt: "2022-10-14T13:36:27Z",
      content:
        "The Apple VR headset could be announced in 2023\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nA new report claims that Apple Glass, or other Apple AR he… [+2444 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title: "Apple Watch sets new US record, now owned by 30% of iPhone users",
      description:
        'New research claims that the Apple Watch has achieved its highest half-year "attach rate," or the percentage of iPhone users who also have an active Watch.Credit: Andrew O\'Hara, AppleInsiderApple Watch has repeatedly dominated the whole smartwatch industry, h…',
      url: "https://appleinsider.com/articles/22/10/14/apple-watch-sets-new-us-record-now-owned-by-30-of-iphone-users",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/44036-85640-Apple-Watch-Blood-Oxygen-xl.jpg",
      publishedAt: "2022-10-14T10:17:25Z",
      content:
        "Credit: Andrew O'Hara, AppleInsider\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nNew research claims that the Apple Watch has achieved its highest half… [+1626 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (AppleInsider Staff)",
      title:
        "Daily deals Oct. 14: AirPods for $90, $30 off iPad, 39% off Apple TV 4K, more",
      description:
        "Friday's best deals include Garmin Approach Golf GPS Watch for $349, $200 off Neato D10 robot vacuum, 43-inch 4K Amazon Fire TV for $300, and much more.Best deals October 14AppleInsider checks online stores daily to uncover discounts and offers on hardware an…",
      url: "https://appleinsider.com/articles/22/10/14/daily-deals-oct-14-airpods-for-90-30-off-ipad-39-off-apple-tv-4k-more",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/50821-100334-Deals-xl.jpg",
      publishedAt: "2022-10-14T13:05:54Z",
      content:
        "Best deals October 14\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nFriday's best deals include Garmin Approach Golf GPS Watch for $349, $200 off Neato … [+2277 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Wesley Hilliard)",
      title: "Questionable iMessage redesign rumored for iOS 17",
      description:
        "A sketchy leak suggests that Apple is working on an updated version of iMessage with chat rooms and AR features built for a headset.An iMessage redesign could be released alongside an AR headsetThe leak comes from a Twitter user named Majin Bu, who has a midd…",
      url: "https://appleinsider.com/articles/22/10/14/questionable-imessage-redesign-rumored-for-ios-17",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/50829-100338-iMessage-design-xl.jpg",
      publishedAt: "2022-10-14T14:43:10Z",
      content:
        "An iMessage redesign could be released alongside an AR headset\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nA sketchy leak suggests that Apple is worki… [+1360 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Andrew Orr)",
      title: "Protect a MacBook Pro with Satechi's Eco HardShell",
      description:
        "Satechi's first case for laptops — the Eco-HardShell Case — is specifically designed to protect the 2021 MacBook Pro line.Satechi's EcoHardShell CaseLong-time accessory vendor Satechi's Eco-HardShell case for MacBook Pro has anti-scratch and anti-fingerprint …",
      url: "https://appleinsider.com/articles/22/10/14/protect-a-macbook-pro-with-satechis-eco-hardshell",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/50811-100311-satechi-MacBook-Pro-case-header-xl.jpg",
      publishedAt: "2022-10-14T15:00:07Z",
      content:
        "Satechi's EcoHardShell Case\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nSatechi's first case for laptops — the Eco-HardShell Case — is specifically de… [+814 chars]",
    },
    {
      source: {
        id: null,
        name: "Elespanol.com",
      },
      author: "Alvarez del Vayo",
      title:
        "El rediseño de Google Play Store en tablets Android ya es oficial",
      description:
        "De cara al lanzamiento de la Pixel Tablet, Google está trabajando en una nueva interfaz para la Google Play Store.",
      url: "https://www.elespanol.com/elandroidelibre/aplicaciones/20221014/rediseno-google-play-store-tablets-android-oficial/710679184_0.html",
      urlToImage:
        "https://s1.eestatic.com/2022/10/06/elandroidelibre/708689763_227970171_600x315.jpg",
      publishedAt: "2022-10-14T13:03:00Z",
      content:
        "En la presentación de los Pixel 7 y Pixel 7 Pro, que ya hemos podido analizar, Google habló también de su nueva tablet, la primera bajo la marca Pixel, Pixel Tablet. Al contrario que los móviles, est… [+1414 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "塚本直樹",
      title:
        "ギズ屋台のガジェットをオトクに買う方法｡3万円以上の買い物が5,000円オフになるのは今だけだよ！",
      description:
        "開店1周年を迎えた「ギズ屋台」にて、後払いサービス「SmartPay」の導入記念として3万円以上の購入で5,000円オフのキャンペーンが実施中。先着60名までが利用できるこのキャンペーンでの、おすすめ商品を選んでみました！",
      url: "https://www.gizmodo.jp/2022/10/giz-yatai-matome.html",
      urlToImage:
        "https://media.loom-app.com/gizmodo/dist/images/2022/10/12/509A9859.jpg?w=1280&h=630&f=jpg",
      publishedAt: "2022-10-14T12:00:00Z",
      content:
        "1SmartPay35,00060\r\ngiz1year\r\n315,000\r\nImage: \r\nSTAX SPIRIT S380\r\n4999044990\r\nApple Pay, Google Pay, LINE Pay, , Paidy, Smartpay, \r\n5,0002\r\nImage: \r\nTourbox NEODJYouTube\r\n219808,0005,0002\r\nApple Pay, … [+812 chars]",
    },
    {
      source: {
        id: null,
        name: "Fashionista",
      },
      author: "Stephanie Saltzman",
      title: "6 Fall Nail Color Trends to Liven Up Your Seasonal Manicure",
      description:
        'The notion of season-specific nail color rules is, like most beauty "rules," outdated, best ignored and probably somehow a result of the patriarchy. When it comes to manicures, the only "rule" worth paying attention to is simple: You do you. But that doesn\'t …',
      url: "https://fashionista.com/2022/10/nail-polish-colors-fall-winter-2022",
      urlToImage:
        "https://fashionista.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_620%2Cx_1146%2Cy_1757/MTkyOTgzODg2MTk0NTQ5OTgx/chocolate-milk-nails.jpg",
      publishedAt: "2022-10-14T13:00:00Z",
      content:
        'The notion of season-specific nail color rules is, like most beauty "rules," outdated, best ignored and probably somehow a result of the patriarchy. When it comes to manicures, the only "rule" worth … [+1561 chars]',
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Tristan",
      title:
        "iOS 16.1 : les 5 nouveautés attendues dans la mise à jour d’Apple",
      description:
        "D'ici à la fin du mois Apple devrait publier une première mise à jour au sein d'iOS 16. L'occasion de découvrir quelques nouveautés. \niOS 16.1 : les 5 nouveautés attendues dans la mise à jour d’Apple",
      url: "https://www.journaldugeek.com/2022/10/14/ios-16-1-les-5-nouveautes-attendues-dans-la-mise-a-jour-dapple/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2022/06/apple-wwdc22-ios16.jpg",
      publishedAt: "2022-10-14T10:00:40Z",
      content:
        "D'ici à la fin du mois Apple devrait publier une première mise à jour au sein d'iOS 16. L'occasion de découvrir quelques nouveautés.Depuis la sortie au début du mois de septembre diOS 16, Apple a bea… [+3171 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Amandine Jonniaux",
      title:
        "1 million de mots de passe Meta potentiels en fuite : êtes-vous concernés ?",
      description:
        "Attention, Meta alerte sur de nombreuses applications frauduleuses sur les stores officiels de Google et Apple. \n1 million de mots de passe Meta potentiels en fuite : êtes-vous concernés ?",
      url: "https://www.journaldugeek.com/2022/10/14/1-million-de-mots-de-passe-meta-potentiels-en-fuite-etes-vous-concernes/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2022/05/facebook.jpg",
      publishedAt: "2022-10-14T12:30:16Z",
      content:
        "Attention, Meta alerte sur de nombreuses applications frauduleuses sur les stores officiels de Google et Apple.Attention aux applications que vous installez sur votre smartphone. Même lorsque ces der… [+2377 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Arthur Nicolle",
      title: "Mythic Quest : bande-annonce et date de sortie pour la saison 3",
      description:
        "Apple TV+ aborde les guerres entre développeurs de jeux vidéo dans la saison 3 de Mythic Quest qui arrive très prochainement.\nMythic Quest : bande-annonce et date de sortie pour la saison 3",
      url: "https://www.journaldugeek.com/2022/10/14/mythic-quest-bande-annonce-et-date-de-sortie-pour-la-saison-3/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2022/10/copie-de-ajouter-un-titre-2022-10-14t121809-466.jpg",
      publishedAt: "2022-10-14T14:00:45Z",
      content:
        "Apple TV+ aborde les guerres entre développeurs de jeux vidéo dans la saison 3 de Mythic Quest qui arrive très prochainement.Développer des jeux vidéo nest pas une activité de tout repos, et Mythic Q… [+2180 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Thomas Estimbre",
      title:
        "Samsung : Android 13 et One UI 5.0 arrivent sur les smartphones Galaxy",
      description:
        "Préparez vos smartphones ! Lors de la conférence des développeurs, Samsung a confirmé l’arrivée imminente de One UI 5 sur les Galaxy S22. La nouvelle interface va apporter son lot de nouveautés.\nSamsung : Android 13 et One UI 5.0 arrivent sur les smartphones …",
      url: "https://www.journaldugeek.com/2022/10/14/samsung-android-13-et-one-ui-5-0-arrivent-sur-les-smartphones-galaxy/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2022/10/samsung-one-ui-5.jpg",
      publishedAt: "2022-10-14T14:30:19Z",
      content:
        "Préparez vos smartphones ! Lors de la conférence des développeurs, Samsung a confirmé larrivée imminente de One UI 5 sur les Galaxy S22. La nouvelle interface va apporter son lot de nouveautés.Androi… [+4979 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Gregori Pujol",
      title: "Amazon Kids sur Alexa est enfin disponible en France",
      description:
        "Amazon Kids sur Alexa est disponible gratuitement pour tous les utilisateurs résidants en France et utilisant des appareils Echo intégrant Alexa.\nAmazon Kids sur Alexa est enfin disponible en France",
      url: "https://www.journaldugeek.com/2022/10/14/amazon-kids-sur-alexa-est-enfin-disponible-en-france/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2022/10/amazon.jpg",
      publishedAt: "2022-10-14T10:45:55Z",
      content:
        "Amazon Kids sur Alexa est disponible gratuitement pour tous les utilisateurs résidants en France et utilisant des appareils Echo intégrant Alexa.Amazon annonce la disponibilité en France d’Amazon Kid… [+6597 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Anh Phan",
      title: "Test Google Pixel 7 Pro et Pixel 7 aka les GOTY",
      description:
        "Annoncé il y a tout juste 8 jours et récupérés le soir même, voici notre tests des Google Pixel 7 Pro et Pixel 7, tout simplement les smartphones de l'année.\nTest Google Pixel 7 Pro et Pixel 7 aka les GOTY",
      url: "https://www.journaldugeek.com/test/test-google-pixel-7-pro-et-pixel-7-aka-les-goty/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2022/10/google-pixel-7-live-08.jpg",
      publishedAt: "2022-10-14T15:05:45Z",
      content:
        "Annoncé il y a tout juste 8 jours et récupérés le soir même, voici notre tests des Google Pixel 7 Pro et Pixel 7, tout simplement les smartphones de l'année.Les Pixel 4 et 5 navaient pas marqué les e… [+19750 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Francisco Bouzas",
      title: "Así puedes ver este domingo El Clásico en tu Apple TV",
      description:
        "Este domingo a las 16:15 disfrutaremos de uno de los mayores acontecimientos deportivos del año: El Clásico. Ese partido que enfrenta al Real Madrid y al Fútbol Club Barcelona y que nadie se quiere perder. Suele haber pocos cada año, y cuando los hay da la se…",
      url: "https://www.applesfera.com/tutoriales/asi-puedes-ver-este-domingo-clasico-tu-apple-tv",
      urlToImage: "https://i.blogs.es/5d5889/hero-2-/840_560.jpeg",
      publishedAt: "2022-10-14T11:01:31Z",
      content:
        "Este domingo a las 16:15 disfrutaremos de uno de los mayores acontecimientos deportivos del año: El Clásico. Ese partido que enfrenta al Real Madrid y al Fútbol Club Barcelona y que nadie se quiere p… [+2808 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "David Bernal Raspall",
      title:
        "Las gafas Reality Pro tendrán soporte para Apple Pay y pagos. Así es como nos identificaremos en ellas, según los rumores",
      description:
        "Parece que no, pero si hacemos caso a los rumores, más pronto que tarde tendremos unas gafas de realidad virtual y aumentada de Apple entre nosotros. Los rumores sitúan el lanzamiento en enero de 2023, y también nos dan interesantes detalles sobre sus capacid…",
      url: "https://www.applesfera.com/rumores/gafas-reality-pro-tendran-soporte-para-apple-pay-pagos-asi-como-nos-identificaremos-ellas-rumores",
      urlToImage: "https://i.blogs.es/528b9c/hero/840_560.jpeg",
      publishedAt: "2022-10-14T13:55:09Z",
      content:
        "Parece que no, pero si hacemos caso a los rumores, más pronto que tarde tendremos unas gafas de realidad virtual y aumentada de Apple entre nosotros. Los rumores sitúan el lanzamiento en enero de 202… [+2448 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Jesús Quesada",
      title:
        "Más ofertas de iPhone 14, estrena Apple Watch con buena rebaja y más: Cazando Gangas",
      description:
        "Volvemos con la sección Cazando Gangas, el espacio de Applesfera dedicado a recopilar las mejores ofertas de dispositivos de Apple, desde iPhone hasta accesorios, pasando por ordenadores Mac, Apple Watch y iPad. Esta entrega llega un par de días después del A…",
      url: "https://www.applesfera.com/general/ofertas-iphone-14-estrena-apple-watch-buena-rebaja-cazando-gangas",
      urlToImage:
        "https://i.blogs.es/ab8625/cazando-gangas-ofertas/840_560.jpg",
      publishedAt: "2022-10-14T06:01:29Z",
      content:
        "Volvemos con la sección Cazando Gangas, el espacio de Applesfera dedicado a recopilar las mejores ofertas de dispositivos de Apple, desde iPhone hasta accesorios, pasando por ordenadores Mac, Apple W… [+6040 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Miguel López",
      title:
        "Netflix ha lanzado un nuevo plan más barato. Paradójicamente, Apple TV+ se revaloriza",
      description:
        "Netflix ha dado forma a lo que llevaba meses entre rumores: un nuevo plan de suscripción a su contenido más barato que compensa su bajada de precio introduciendo anuncios entre otras limitaciones. Tras varios aumentos de la cuota mensual, el precio de de 5,49…",
      url: "https://www.applesfera.com/servicios-apple/netflix-ha-lanzado-nuevo-plan-barato-paradojicamente-apple-tv-se-revaloriza",
      urlToImage: "https://i.blogs.es/349671/hero3/840_560.jpeg",
      publishedAt: "2022-10-14T12:38:02Z",
      content:
        "Netflix ha dado forma a lo que llevaba meses entre rumores: un nuevo plan de suscripción a su contenido más barato que compensa su bajada de precio introduciendo anuncios entre otras limitaciones. Tr… [+2625 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Miguel López",
      title:
        "Zuckerberg revela la fuente de ingresos de Meta con las Meta Quest 2. Lo hace criticando a Apple",
      description:
        "Meta y Apple no se llevan muy bien que digamos. Facebook vio como sus ingresos descendían a raíz de las medidas de privacidad que Apple instauró en iOS 15, y no es una tendencia que vaya a cambiar viendo lo que piensa Tim Cook acerca de que los servicios vend…",
      url: "https://www.applesfera.com/apple-1/zuckerberg-revela-fuente-ingresos-meta-meta-quest-2-hace-criticando-a-apple",
      urlToImage: "https://i.blogs.es/96feca/1366_2000/840_560.jpeg",
      publishedAt: "2022-10-14T15:01:33Z",
      content:
        "Meta y Apple no se llevan muy bien que digamos. Facebook vio como sus ingresos descendían a raíz de las medidas de privacidad que Apple instauró en iOS 15, y no es una tendencia que vaya a cambiar vi… [+1761 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Jesús Quesada",
      title:
        "Este purificador de aire HomeKit, rebajado 50 euros, mejora la calidad de vida en casa y lo filtra casi todo",
      description:
        "Un purificador de aire es un aparato muy interesante para mejorar la calidad de vida de las personas que sufren alergias o residen en lugares contaminados. El VOCOlinc Pureflow Smart Air Purifier es uno de los pocos modelos que se integran totalmente con Home…",
      url: "https://www.applesfera.com/seleccion/este-purificador-aire-homekit-rebajado-50-euros-mejora-calidad-vida-casa-filtra-casi-todo",
      urlToImage:
        "https://i.blogs.es/2882ee/purificador-aire-homekit-oferta/840_560.jpg",
      publishedAt: "2022-10-14T14:15:32Z",
      content:
        "Un purificador de aire es un aparato muy interesante para mejorar la calidad de vida de las personas que sufren alergias o residen en lugares contaminados. El VOCOlinc Pureflow Smart Air Purifier es … [+2238 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Pedro Aznar",
      title:
        "Razer Kishi V2, análisis: este mando me ha vuelto a enamorar de los juegos de iPhone",
      description:
        "Steve Jobs demostró en 2007 que la pantalla táctil del iPhone era un sustituto perfecto para el teclado que hasta entonces tenían los móviles: en aquel momento pocos pensaban que escribir un mensaje en un teclado táctil iba a ser tan rápido a cómo lo hacemos …",
      url: "https://www.applesfera.com/accesorios/razer-kishi-v2-analisis-caracteristicas-precio-especificaciones",
      urlToImage:
        "https://i.blogs.es/a4314c/analisis-razer-kishi-v2-034/840_560.jpeg",
      publishedAt: "2022-10-14T10:13:17Z",
      content:
        "Steve Jobs demostró en 2007 que la pantalla táctil del iPhone era un sustituto perfecto para el teclado que hasta entonces tenían los móviles: en aquel momento pocos pensaban que escribir un mensaje … [+10159 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "David Bernal Raspall",
      title:
        "Qué es Time Machine y cómo utilizarlo para mantener los datos de nuestros Mac a salvo",
      description:
        "Time Machine es el sistema de copias de seguridad del Mac. Un sistema con el que podemos resguardar toda la información de nuestro ordenador de forma incremental y ordenada para poder recuperarlo tanto después de haber eliminado un archivo concreto como cuand…",
      url: "https://www.applesfera.com/tutoriales/que-time-machine-como-utilizarlo-para-mantener-datos-nuestros-mac-a-salvo",
      urlToImage: "https://i.blogs.es/b9a623/imagen-1/840_560.jpeg",
      publishedAt: "2022-10-14T13:01:32Z",
      content:
        "Time Machine es el sistema de copias de seguridad del Mac. Un sistema con el que podemos resguardar toda la información de nuestro ordenador de forma incremental y ordenada para poder recuperarlo tan… [+2546 chars]",
    },
    {
      source: {
        id: null,
        name: "Theregister.com",
      },
      author: "Thomas Claburn",
      title: "The Metaverse is the internet no one wants",
      description:
        "Meta's push to put computing into a headset will end in tears\nComment The Metaverse, as the company formerly known as Facebook defines the term in its financial filings, is \"an embodied internet where people have immersive experiences beyond two-dimensional s…",
      url: "https://www.theregister.com/2022/10/14/metaverse_internet_failure/",
      urlToImage:
        "https://regmedia.co.uk/2021/11/04/metaverse_shutterstock.jpg",
      publishedAt: "2022-10-14T12:32:09Z",
      content:
        'Comment The Metaverse, as the company formerly known as Facebook defines the term in its financial filings, is "an embodied internet where people have immersive experiences beyond two-dimensional scr… [+3989 chars]',
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "RPB",
      title:
        "Fini le chargeur avec les iPhone ? Apple écope d’une grosse amende dans ce pays",
      description:
        "La justice brésilienne ordonne Apple de payer une amende de 19,47 millions d'euros pour vendre ses derniers iPhone sans chargeur. La firme pourrait être forcée de les inclure de nouveau.",
      url: "https://www.presse-citron.net/fini-le-chargeur-avec-les-iphone-apple-doit-payer-une-grosse-amende-dans-ce-pays/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2019/10/Boite-iPhone11-iPhone11-Pro.jpg",
      publishedAt: "2022-10-14T08:04:24Z",
      content:
        "Au Brésil, Apple devra désormais vendre ses iPhone avec un chargeur. Le tribunal de São Paulo a en effet décidé de condamner la firme à payer une amende de 100 millions de Real brésiliens (soit 19,47… [+2407 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "RPB",
      title:
        "Son iPhone 14 Pro Max s’est fait voler trois fois pendant la livraison",
      description:
        "Un client américain qui avait précommandé un iPhone 14 Pro Max, raconte comment son smartphone a été volé pendant la livraison à trois reprises. Le malchanceux a préféré annuler sa commande auprès de Apple pour récupérer une unité en magasin.",
      url: "https://www.presse-citron.net/?p=520170",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2022/09/test-iphone-14-pro-max-dynamic-island.jpg",
      publishedAt: "2022-10-14T13:00:07Z",
      content:
        "L’histoire (que l’on espère pas courante) vient du Reddit r/iPhone. Un client (qui se fait appeler Ucsdsig sur le site) raconte comment sa précommande d’iPhone 14 Pro Max s’est transformée en véritab… [+2372 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Setra",
      title:
        "Recycler nos smartphones devient urgent : 5,3 milliards de déchets rien que pour 2022",
      description:
        "D’après cette étude, sur les 16 milliards de mobiles (smartphones inclus) que nous possédons, 5,3 milliards deviendront des déchets cette année.",
      url: "https://www.presse-citron.net/recycler-nos-smartphones-devient-urgent-53-milliards-de-dechets-rien-que-pour-2022/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2022/10/telephone-smartphone-dechets-electroniques-ewaste-pollution-mobile.jpg",
      publishedAt: "2022-10-14T14:30:25Z",
      content:
        "Cela fait des années que lon tire la sonnette dalarme au sujet des déchets produits par nos anciens appareils électroniques. Et aujourdhui, on a une donnée très précise, grâce aux estimations réalisé… [+4719 chars]",
    },
    {
      source: {
        id: null,
        name: "Pitchfork",
      },
      author: "Jazz Monroe, Madison Bloom",
      title:
        "8 New Albums You Should Listen to Now: The 1975, Red Hot Chili Peppers, and More",
      description:
        "Stream new releases from the 1975, Red Hot Chili Peppers, Lucrecia Dalt, Bill Callahan, Plains, Mavi, Sam Gendel, and Palm",
      url: "https://pitchfork.com/news/8-new-albums-you-should-listen-to-now-the-1975-red-hot-chili-peppers/",
      urlToImage:
        "https://media.pitchfork.com/photos/634950554692fef75710837a/16:9/w_1280,c_limit/The-1975.jpg",
      publishedAt: "2022-10-14T12:50:41Z",
      content:
        "With so much good music being released all the time, it can be hard to determine what to listen to first. Every week, Pitchfork offers a run-down of significant new releases available on streaming se… [+1232 chars]",
    },
    {
      source: {
        id: null,
        name: "Pitchfork",
      },
      author: "Jazz Monroe",
      title:
        "Blink-182 Release “Edging,” First New Song With Tom DeLonge in 10 Years: Listen",
      description:
        "DeLonge, Mark Hoppus, and Travis Barker regrouped in the studio before announcing their huge reunion tour",
      url: "https://pitchfork.com/news/blink-182-release-edging-first-new-song-with-tom-delonge-in-10-years-listen/",
      urlToImage:
        "https://media.pitchfork.com/photos/63481f4e96b294a782f0ef35/16:9/w_1280,c_limit/Blink-182.jpg",
      publishedAt: "2022-10-14T04:00:23Z",
      content:
        "Blink-182 have released Edging, their first song with founding member Tom DeLonge since the 2012 EP Dogs Eating Dogs. Check out the new track below. The release follows the announcement of Blink-182s… [+2138 chars]",
    },
    {
      source: {
        id: null,
        name: "GameSpot",
      },
      author: "Steven T. Wright",
      title:
        "Two Years After $192M Acquisition, Take-Two Shuts Down Two Dots Studio Playdots",
      description:
        "Take-Two is shutting down Playdots, the studio behind the smash mobile hit Two Dots. According to Bloomberg, this will result in the loss of 65 jobs, though staffers at the studio can apply for other jobs within Take-Two's other mobile gaming giant, Zynga. Ta…",
      url: "https://www.gamespot.com/articles/two-years-after-192m-acquisition-take-two-shuts-down-two-dots-studio-playdots/1100-6508293/",
      urlToImage:
        "https://www.gamespot.com/a/uploads/screen_kubrick/1596/15969599/4049272-twodots.jpg",
      publishedAt: "2022-10-14T14:31:00Z",
      content:
        "Take-Two is shutting down Playdots, the studio behind the smash mobile hit Two Dots. According to Bloomberg, this will result in the loss of 65 jobs, though staffers at the studio can apply for other… [+1222 chars]",
    },
    {
      source: {
        id: null,
        name: "XDA Developers",
      },
      author: "Mahmoud Itani",
      title:
        "Apple iPhone 14 vs Apple iPhone 14 Pro: Which 2022 phone should you buy?",
      description:
        "Apple launched the iPhone 14 series back in September 2022, and this time around, the company started heavily distinguishing between Pro and regular models. 2022’s regular iPhones are almost an insignificant iteration of the iPhone 13. Meanwhile, the iPhone 1…",
      url: "https://www.xda-developers.com/apple-iphone-14-vs-apple-iphone-14-pro/",
      urlToImage:
        "https://www.xda-developers.com/files/2022/09/iphone-14-pro-max-xda-43.jpg",
      publishedAt: "2022-10-14T09:32:28Z",
      content:
        "Apple launched the iPhone 14 series back in September 2022, and this time around, the company started heavily distinguishing between Pro and regular models. 2022’s regular iPhones are almost an insig… [+12875 chars]",
    },
    {
      source: {
        id: null,
        name: "XDA Developers",
      },
      author: "Timi Cantisano",
      title:
        "It’s okay to use an Apple AirTag to track your luggage when you travel",
      description:
        "This might seem like common sense but it’s okay to have an Apple AirTag attached to or inside your luggage when traveling on a flight. So why is this topic being brought up over a year after the launch of the product? Recently, German airline Lufthansa began …",
      url: "https://www.xda-developers.com/apple-airtag-luggage-tracking/",
      urlToImage: "https://www.xda-developers.com/files/2021/04/DSC04762.jpg",
      publishedAt: "2022-10-14T03:08:04Z",
      content:
        "This might seem like common sense but it’s okay to have an Apple AirTag attached to or inside your luggage when traveling on a flight. So why is this topic being brought up over a year after the laun… [+2048 chars]",
    },
    {
      source: {
        id: null,
        name: "XDA Developers",
      },
      author: "Mahmoud Itani",
      title:
        "Microsoft Surface Pro 9 vs Apple MacBook Air M2: Which should you buy?",
      description:
        "The Microsoft Surface Pro 9 is here. Arguably one of the best Surface devices — and overall Windows tablets — this device caters to the versatile format fans. It has a hybrid design, allowing you to use it as either a tablet or a laptop — assuming you buy a k…",
      url: "https://www.xda-developers.com/microsoft-surface-pro-9-vs-apple-macbook-air-m2/",
      urlToImage:
        "https://www.xda-developers.com/files/2022/10/Microsoft-Surface-Pro-9-2022-vs-MacBook-Air-13-2022.jpg",
      publishedAt: "2022-10-14T15:00:54Z",
      content:
        "The Microsoft Surface Pro 9 is here. Arguably one of the best Surface devices — and overall Windows tablets — this device caters to the versatile format fans. It has a hybrid design, allowing you to … [+8402 chars]",
    },
    {
      source: {
        id: null,
        name: "XDA Developers",
      },
      author: "Timi Cantisano",
      title:
        "Amazon gets one step closer to launching its own satellite internet service",
      description:
        "We’ve been hearing a lot about satellites over the past few months, especially with Apple introducing its Emergency SOS service and T-Mobile pledging to offer satellite cellular service by 2023. SpaceX offers satellite internet service with Starlink and has e…",
      url: "https://www.xda-developers.com/amazon-satellite-internet-service-launch/",
      urlToImage: "https://www.xda-developers.com/files/2022/10/XDA-2-10.jpg",
      publishedAt: "2022-10-14T04:43:35Z",
      content:
        "We’ve been hearing a lot about satellites over the past few months, especially with Apple introducing its Emergency SOS service and T-Mobile pledging to offer satellite cellular service by 2023. Spac… [+1896 chars]",
    },
    {
      source: {
        id: null,
        name: "XDA Developers",
      },
      author: "Rich Woods",
      title:
        "Google is still the one holding back native browsers for Windows on Arm",
      description:
        "If you’ve been following along for the past decade or so, then you know that the story between Microsoft and Google is the same. Whether it’s Windows RT, Windows Phone, or Windows 11 on Arm, we never see native Google apps. Of course, the former two of those …",
      url: "https://www.xda-developers.com/google-holding-back-native-browsers-windows-on-arm/",
      urlToImage:
        "https://www.xda-developers.com/files/2017/06/Windows10-Qualcomm-Snapdragon-1024x576.jpg",
      publishedAt: "2022-10-14T14:23:13Z",
      content:
        "If you’ve been following along for the past decade or so, then you know that the story between Microsoft and Google is the same. Whether it’s Windows RT, Windows Phone, or Windows 11 on Arm, we never… [+5074 chars]",
    },
    {
      source: {
        id: null,
        name: "The A.V. Club",
      },
      author: "Saloni Gajjar",
      title:
        "Sharon Horgan breaks down that killer reveal from the Bad Sisters finale",
      description:
        "The star and creator of Apple TV Plus' Bad Sisters talks about crafting despicable characters, those fabulous outfits, and the possibility of another season",
      url: "https://www.avclub.com/bad-sisters-finale-sharon-horgan-interview-1849650473",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f0adab1b5c8fa544fb04eb5b7463223d.jpg",
      publishedAt: "2022-10-14T14:00:00Z",
      content:
        "[The following interview contains spoilers for the Bad Sisters finale. Proceed at your own risk.]\r\nTake one glance at the impressive list of TV shows Sharon Horgan has crafted, from 2006s Pullingto 2… [+7920 chars]",
    },
    {
      source: {
        id: null,
        name: "The A.V. Club",
      },
      author: "Saloni Gajjar",
      title: "Shantaram isn't just misguided, it's monotonous",
      description:
        "Apple TV+’s Shantaram, an adaptation of Gregory David Roberts’ sprawling, almost 1,000-page novel of the same name, certainly seemed promising enough. After all, the story combines the elements of a tense thriller, a mafia tale, an emotional drama, and even a…",
      url: "https://www.avclub.com/shantaram-show-review-apple-tv-plus-1849645954",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e720aa054f413a07e4e0934cb4f028e2.jpg",
      publishedAt: "2022-10-14T15:00:00Z",
      content:
        "Apple TV+s Shantaram, an adaptation of Gregory David Roberts sprawling, almost 1,000-page novel of the same name, certainly seemed promising enough. After all, the story combines the elements of a te… [+5344 chars]",
    },
    {
      source: {
        id: null,
        name: "The A.V. Club",
      },
      author: "Saloni Gajjar",
      title: "6 things you have to watch on TV this weekend",
      description:
        "Welcome to the weekend edition of What’s On. Here are the big things happening on TV from Friday, October 14, to Sunday, October 16. All times are Eastern. [Note: The weekly What’s On will publish on Sundays.]Read more...",
      url: "https://www.avclub.com/whats-on-tv-oct-14-16-rings-of-power-halloween-ends-1849647418",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/4a69d230fe36e03382cefbe097eda7c4.png",
      publishedAt: "2022-10-14T11:00:00Z",
      content:
        "Welcome to the weekend edition of Whats On. Here are the big things happening on TV from Friday, October 14, to Sunday, October 16. All times are Eastern. [Note: The weekly Whats On will publish on S… [+3137 chars]",
    },
    {
      source: {
        id: null,
        name: "Mental Floss",
      },
      author: "Michele Debczak",
      title:
        "Off the Map: Why the Internet Loves Being Creeped Out By Liminal Spaces",
      description:
        "The liminal space aesthetic has only been around for a few years, but it triggers a primal fear that predates the internet.",
      url: "https://www.mentalfloss.com/posts/why-are-liminal-spaces-creepy",
      urlToImage:
        "https://images2.minutemediacdn.com/image/upload/c_crop,w_929,h_522,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01geqhh5r0rdcf8nff2q.jpg",
      publishedAt: "2022-10-14T14:00:00Z",
      content:
        "Spend enough time in the right corners of the internet and youll find photographs that provoke an uncanny sense of dread. The scenes they contain are ordinary: a corridor of unmarked doors stretching… [+8070 chars]",
    },
    {
      source: {
        id: null,
        name: "Ritholtz.com",
      },
      author: "Barry Ritholtz",
      title: "10 Friday AM Reads",
      description:
        "My end-of-week morning train WFH reads: • You’re going back to the office. Your boss isn’t. Bosses are ordering people back to the office from the comfort of their own homes. (Vox) • In the Battle With Robots, Human Workers Are Winning: As central bankers aro…",
      url: "https://ritholtz.com/2022/10/10-friday-am-reads-383/",
      urlToImage:
        "https://ritholtz.com/wp-content/uploads/2022/10/seasonality.jpeg",
      publishedAt: "2022-10-14T10:45:08Z",
      content:
        "Youre going back to the office. Your boss isnt. Bosses are ordering people back to the office from the comfort of their own homes. (Vox)\r\nIn the Battle With Robots, Human Workers Are Winning: As cent… [+3198 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
      title:
        "Lil Baby Wants You to Know 'It's Only Me' With Extensive New Album",
      description:
        'Lil Baby has dropped off his third studio album, It\'s Only Me.Clocking in at an hour and five minutes, the extensive 23-track record features guest appearances from Nardo Wick on "Pop Out," Young Thug on "Never Hating," Fridayy on "Forever," Future on "From N…',
      url: "https://hypebeast.com/2022/10/lil-baby-its-only-me-album-stream",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F10%2Flil-baby-its-only-me-album-stream-tw.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2022-10-14T04:01:50Z",
      content:
        "Lil Baby has dropped off his third studio album, It’s Only Me.\r\nClocking in at an hour and five minutes, the extensive 23-track record features guest appearances from Nardo Wick on “Pop Out,” Young T… [+560 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Setra",
      title: "Vous auriez pu acheter cet iPhone à 649 € et revendre à 30 000 €",
      description:
        "S’il est encore scellé, un iPhone de première génération, celui que Steve Jobs a dévoilé en 2007, se vend à prix d’or.",
      url: "https://www.presse-citron.net/vous-auriez-pu-acheter-cet-iphone-a-649-e-et-revendre-a-30-000-e/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2022/10/iPhone-2G-encheres.jpg",
      publishedAt: "2022-10-14T09:00:16Z",
      content:
        "Lorsque le premier iPhone est arrivé en France, la plupart dentre nous navaient en tête (ou pas) que de se procurer ce modèle afin de lutiliser. Presque personne ne se doutait que le premier smartpho… [+2246 chars]",
    },
    {
      source: {
        id: null,
        name: "The A.V. Club",
      },
      author: "Katie Chow",
      title:
        "Taika Waititi will direct Jimmy O. Yang in Hulu's Interior Chinatown miniseries adaptation",
      description:
        "Details are starting to come together for Hulu’s miniseries adaptation of Charles Yu’s novel Interior Chinatown. Jimmy O. Yang has signed on to star in the 10-episode drama, and Taika Waititi is set to direct the pilot and serve as an executive producer, as r…",
      url: "https://www.avclub.com/jimmy-o-yang-taika-waititi-interior-chinatown-hulu-1849658018",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/46e79f30bfde29d65d56c8b9a39bd0b0.jpg",
      publishedAt: "2022-10-14T14:04:26Z",
      content:
        "Details are starting to come together for Hulus miniseries adaptation of Charles Yus novel Interior Chinatown. Jimmy O. Yang has signed on to star in the 10-episode drama, and Taika Waititi is set to… [+2085 chars]",
    },
    {
      source: {
        id: null,
        name: "Marginalrevolution.com",
      },
      author: "Alex Tabarrok",
      title: "Telemedicine is Dying",
      description:
        "Bloomberg: Prior to the Covid era, telehealth accounted for less than 1% of outpatient care, according to the Kaiser Family Foundation. Telehealth services have since surged, at their peak accounting for 40% of outpatient visits for mental health and substanc…",
      url: "https://marginalrevolution.com/marginalrevolution/2022/10/telemedicine-is-dying.html",
      urlToImage:
        "https://marginalrevolution.com/wp-content/uploads/2016/10/MR-logo-thumbnail.png",
      publishedAt: "2022-10-14T11:25:29Z",
      content:
        "Bloomberg: Prior to the Covid era, telehealth accounted for less than 1% of outpatient care, according to the Kaiser Family Foundation. Telehealth services have since surged, at their peak accounting… [+1807 chars]",
    },
    {
      source: {
        id: "die-zeit",
        name: "Die Zeit",
      },
      author: "ZEIT ONLINE: Boerse - Jan Guldner",
      title: "Fractional Shares: Eine halbe Apple-Aktie, bitte",
      description:
        "Weil manche Aktien sehr teuer sind, können Anleger jetzt auch Wertpapier-Bruchstücke für ein paar Euro kaufen. Das macht das Traden leichter – hat aber auch Nachteile.",
      url: "https://www.zeit.de/zustimmung?url=https%3A%2F%2Fwww.zeit.de%2Fwirtschaft%2Fboerse%2F2022-10%2Ffractional-shares-aktien-tipps",
      urlToImage: null,
      publishedAt: "2022-10-14T12:28:13Z",
      content:
        "When browsing with ads:\r\nWe collect personal data and also transmit it to third-party providers\r\n that help us improve and finance our digital content. Some of the information stored on your device, … [+732 chars]",
    },
    {
      source: {
        id: null,
        name: "BGR",
      },
      author: "Maren Estrada",
      title:
        "Today’s deals: Last-chance Prime Sale deals, HP printers, air fryers, $89 AirPods, more",
      description:
        "The Prime Early Access Sale was fantastic in 2022. Prime members got Black Friday-quality deals on all the hottest products of the holiday season. Plus, there are still so many fantastic Prime Day deals that are still available right now! Of course, there’s p…",
      url: "https://bgr.com/deals/todays-deals-last-chance-prime-sale-deals-hp-printers-air-fryers-89-airpods-more/",
      urlToImage:
        "https://bgr.com/wp-content/uploads/2022/02/bgr-deals-of-the-day-2022-5.jpg?quality=82&strip=all",
      publishedAt: "2022-10-14T13:15:00Z",
      content:
        "If you purchase an independently reviewed product or service through a link on our website, we may receive an affiliate commission. Learn more.\r\nThe Prime Early Access Sale was fantastic in 2022. Pri… [+4205 chars]",
    },
    {
      source: {
        id: null,
        name: "BGR",
      },
      author: "Andy Meek",
      title: "Rosaline might be my favorite Hulu release of 2022",
      description:
        "Kaitlyn Dever — the star of Hulu’s new Rosaline movie that debuts on Friday and offers a fresh, comedic take on Romeo & Juliet — is an actress of uncommon ability and singular talent. Her talent being, at least in my opinion, that she’s pretty much impossible…",
      url: "https://bgr.com/entertainment/rosaline-might-be-my-favorite-hulu-release-of-2022/",
      urlToImage:
        "https://bgr.com/wp-content/uploads/2022/10/ros-trl-1-35-1.jpg?quality=82&strip=all",
      publishedAt: "2022-10-14T00:32:00Z",
      content:
        "Kaitlyn Dever — the star of Hulu’s new Rosaline movie that debuts on Friday and offers a fresh, comedic take on Romeo &amp; Juliet — is an actress of uncommon ability and singular talent. Her talent … [+2654 chars]",
    },
    {
      source: {
        id: null,
        name: "Faz.net",
      },
      author: "FAZ.NET",
      title: "Wieso die Luxusmarke Diptyque jetzt Spülmittel anbietet",
      description:
        "Das Pariser Parfumhaus Diptyque bietet jetzt auch Spülmittel an. Was ist so reizvoll an luxuriösen Haushaltsprodukten? Und wer benutzt sie eigentlich?",
      url: "https://www.faz.net/aktuell/stil/trends-nischen/wieso-die-luxusmarke-diptyque-jetzt-spuelmittel-anbietet-18348652.html",
      urlToImage:
        "https://media1.faz.net/ppmedia/aktuell/2646234396/1.8348903/facebook_teaser/ungeliebte-haushaltstaetigkeit.jpg",
      publishedAt: "2022-10-14T07:48:25Z",
      content:
        "Schade, dass Weihnachten noch eine Weile hin ist: Das Pariser Parfumhaus Diptyque hat sich eine Linie für Haushaltsprodukte gegönnt. Ja, richtig: Haushaltsprodukte. Spülmittel, Allesreiniger, Bürsten… [+3270 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "heyimjoew@gmail.com (Joe Wituschek)",
      title:
        "Apple has dropped the official trailer for Louis Armstrong’s Black & Blues",
      description:
        "Apple TV Plus has released the official trailer for the upcoming documentary Louis Armstrong’s Black & Blues.",
      url: "https://www.imore.com/music-movies-tv/apple-tv/apple-has-dropped-the-official-trailer-for-louis-armstrongs-black-and-blues",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/AEg5ZTyh8A5DRN4ipVfnTh-1200-80.jpeg",
      publishedAt: "2022-10-14T00:04:22Z",
      content:
        "Apple continues to drop all of the trailers for its upcoming projects.\r\nToday, Apple TV Plus released the official trailer for Louis Armstrong’s Black &amp; Blues, the upcoming documentary about the … [+1653 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "oliver@monkeymanmedia.com (Oliver Haslam)",
      title: "Taylor Swift music is coming to Apple Fitness Plus workouts",
      description:
        "Taylor Swift fans might want to get their workout gear ready — her music is coming to Apple Fitness Plus.",
      url: "https://www.imore.com/health-fitness/taylor-swift-music-is-coming-to-apple-fitness-plus-workouts",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/oy2disRTC3ZkGj9MFqZGuW-1200-80.jpg",
      publishedAt: "2022-10-14T13:35:38Z",
      content:
        "Taylor Swift is coming to Apple Fitness Plus. That's it. That's all you Swifties need to know.\r\nMore? OK, we know that Taylor Swift is going to be the next artist to have their music features via App… [+1511 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "heyimjoew@gmail.com (Joe Wituschek)",
      title:
        "How to watch Shantaram, a new drama series starring Charlie Hunnam, on Apple TV Plus",
      description:
        "Shantaram, a new drama series starring Charlie Hunnam, is now streaming on Apple TV+. Here's how to watch it.",
      url: "https://www.imore.com/music-movies-tv/apple-tv/how-to-watch-shantaram-a-new-drama-series-starring-charlie-hunnam-on-apple-tv-plus",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/R25CdMVgx2jjgcNLpqePBd-1200-80.jpeg",
      publishedAt: "2022-10-14T11:00:00Z",
      content:
        'Shantaram is now streaming on Apple TV+.\r\nThe new series, which stars Charlie Hunnam, follows the story of a fugitive named Lin Ford (Hunnam) who is "looking to get lost in vibrant and chaotic 1980s … [+1617 chars]',
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "oliver@monkeymanmedia.com (Oliver Haslam)",
      title:
        "Apple fined $19 million over its refusal to put chargers in iPhone boxes",
      description:
        "A court in Brazil has told Apple to hand over $19 million of the lack of chargers in iPhone boxes.",
      url: "https://www.imore.com/iphone/apple-fined-dollar19-million-over-its-refusal-to-put-chargers-in-iphone-boxes",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/9FLMTQ478D5H5o6mi4wTT4-1200-80.jpg",
      publishedAt: "2022-10-14T10:31:48Z",
      content:
        "Apple's decision not to put chargers in iPhone boxes has always been a bone of contention and now it's put the company on the hook for $19 million.\r\nThat money will need to be handed over as part of … [+1504 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "heyimjoew@gmail.com (Joe Wituschek)",
      title: "Using an iPhone VPN? You're not as secure as you think",
      description:
        "Security researchers have discovered that some of Apple's own services communicate with Apple outside of VPN protection.",
      url: "https://www.imore.com/ios/using-an-iphone-vpn-youre-not-as-secure-as-you-think",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/EXVS9LFTrTLJVM8LP2df4V-1200-80.jpg",
      publishedAt: "2022-10-14T10:49:37Z",
      content:
        "It appears that a number of Apple's own services skip the protection of a VPN with iOS 16.\r\nTwo iOS developers, who also serve as security researchers, have discovered that iOS 16 communicates with A… [+2929 chars]",
    },
  ],
};

export default function Feed() {
  const [news, setNews] = useState(gonews);
  async function feching() {
    // const response = await fetch(
    //   "https://newsapi.org/v2/everything?q=Apple&from=2022-10-14&sortBy=popularity&apiKey=c3682df6d281466b997bf564a81ade37"
    // );
    // const data = await response.json();
    // console.log("data", data);
    // setNews(data);
  }
  useEffect(() => {
    feching();
  }, []);

  return (
    <div className="sidebar-conataier">
      <div className="sidebar-first">
        <h1 className="start">
          Explore the <Ct text="news feed" /> that feeds your interest
        </h1>
        <div className="start">
          Get the news you're interested in — all in one feed. Filter your news
          feed by trending news, sports, gaming, entertainment and more.
        </div>
        <div className="start">
          <Link to="/Shopping">
            {" "}
            <But text="Next" />
          </Link>
        </div>
      </div>
      <div className="sidebar-sec">
        <div className="news-feeds">
          {news.articles.map((item) => (
            <span key={item.source.id}>
              <Card2
                imgsrc={item.urlToImage}
                title={item.title}
                content={item.content}
                url={item.url}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
