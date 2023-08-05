const initialMusic = [
    { id: 1, title: 'Avatar', imageUrl:"https://www.tonica.la/__export/1590597653713/sites/debate/img/2020/05/27/avatar-portada.jpg_423682103.jpg"},
    { id: 2, title: 'Titanic' , imageUrl:"https://cdn.vox-cdn.com/thumbor/KHQaDuNPbKGJn4GtYomrmoXKE1Q=/0x0:2000x1353/1400x1050/filters:focal(531x175:851x495):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/58029793/titaniccover.0.jpg"},
    { id: 3, title: 'Advengers End Game', imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81%2BNup8-8NL._SL1500_.jpg"},
    { id: 4, title: 'Harry Potter And The Deathly Hallows Part 2' , imageUrl:"https://lh3.googleusercontent.com/cTrkeqOyed31hsaGW-Ich8xZP5ImayRR9xFQ7czAjoyiWrFHDl3cIbTnx_pgCsptkcEqxhvGk0sjcJQjW0pz"},
    { id: 5, title: 'The Lord of the Rings: The Return of the King', imageUrl:"https://c8.alamy.com/comp/T0KB79/gollum-the-lord-of-the-rings-the-return-of-the-king-2003-T0KB79.jpg"},
    { id: 6, title: 'Transformers: Dark of the Moon' , imageUrl:"https://img.discogs.com/343v2OSD56TjdoO_Fm5t0fO28qM=/fit-in/600x450/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3010888-1311606022.jpeg.jpg"},
    { id: 7, title: 'Batman: The Dark Knight', imageUrl:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NCg0NEw0NDQ0NDQ0ODQ0NDQ8NDQ4NIBEWFyARFhUkHSggGCYlJxMZIjEiJikrLi4uFx8zODMsNygtLisBCgoKDg0OFRAPFiseFR0tKystKysrLS0rKystLSs3LisrKysrKysrLSs3NzcrKystLSsrLSsrKy0rNy0tMi0tK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAABAgUGB//EAEIQAAIBAwEEBQkGBAUEAwAAAAECAAMREiEEIjEyBRNBQlFSYWJxcoGRwfAGI4KSobEUM9HhB0OisvEkNMLiU3PS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKBEBAQACAgIBAgYDAQAAAAAAAAECESExAxJBE1EEIlJxkcFhofAy/9oADAMBAAIRAxEAPwA1JeX/AG/XCOimgXNguKKzZeSoGp+EBsezEspOW63db1j3j9PhJ9qqgo9E1vKqqtFfxGxt7sj7p1PJfK69Q1qr1jzValSo3tEk/OUqiMLS3ZKdPzS9HcmCB6MLQpAtqcF8rFmx9wm0pE8CvlNy8sOlhTfTebq8WyO7a9wB57j4ScqrDHd5c6uN4YjHFd7J+9xNtOGo0jHTtU1GoZOuXUU8u9vEAGwGg4eAk/h86VZ7ZY16VP4iobaeyI10xSTHPv8AWtR9Lq1poeHnNXT1TC3H6k+7ux954cueLrhzdmTc8rJm3uXh/wAStpG6twzb3d3f29cfoU91fZ+v+IHaKG8thlzd7x/4nS8/fOwFpjqGOHfVcWbLhrG+jqZOZOGK4444+c/KR0tQUHDeqNzby6aR7ocjFhmr8q7q448dB4ycpwvG8pttK+zMO9iuPxHwnN2OiEZycuR+bzDzTu9LhBQbRu7u8rcfNOdstFCtXTHKk/Mzb2nDX1ScYvPLqAbIgFVNFy/M3CdEj67sXp1cG3girvbq+YGeiX7M7ZWesVoYbPQxVq9XcpNUFNc8CdX3sxoLaW7JVsnbPGWzh4pgfBsfa3YbaUvVblXl5vUOydBdlobNXpGrVpNRd6lJqy5sqsyFeAF9L390Ub7z7wBWVsd7Rl4Ryy0rMpjtES6r+GLbbTGS834Z0qdLdX680HtlE4r+L5QKfdy6VIlbAd7lb1Q7UqiUsDhgzK26u9kARzWva19L+ELSpkakd5d394Wo98Rgq73dbJuB80NHciBTdmv4RMbjJmx+UYKCL7/AZ7vk/wBo9FLUo0kxuQvN3vj85WHNK6sltBlCFCnGBqp2Day6tQFlsPzS7kZac27ky8q6cPD/AJm+pA8pmiJh6t14LI9C2GRVes3u1mVewsB8bcYxsFKl1i9YGw5mx5mt3B4X4X7IGogDW5vZyxy8IfOlTUmwH1uAH9HHdZl9Rvr5gYsUB7d70lx/rHuHGCqAFlI/FHoTIuA/bywxW63Hd5v6zT2x4TP1+8NDe1dZJJ+WSB8PtezbOfzev6908z/iNU/7Wh/9lZvRtuj/AM59AGy/X1xnyn7W1jU6W2oF81pN1dNm8kXJTTwJceoCRj2zs4cI05nq+aGqiYc2X2vlNEsIo3gd7db8LXGunHtHvkr6U2Kl8sl3e6q2JJv6wNJqgpOUurTJV7YtjTZuZeUcbXtc2vw1meTXx7+C2wbU/VLQ6tGTr1rMzLk+QGNr34WJMutWq1GYA7i1HZVx8SBfQeqEp7I9NkLDHrKHX7vNib2B9YsffK2S2K3K59ZSxVV7pvck+IstvWZEmO9xvlll6zGmqVDuDLH2vhAbdRtU17qr8z851dnpA6n2oKu1HrGyDNveVjwsPlNZeXNZqObtVNOo2cd5usZffYxrodRjblyqM3NzaDSx98drIPuh1a/yl5rbvHT1wtPZfurjdZmbHFeX6Cw+DnZHpqtdVQBuZd1fUYojulJhbFlXm8q/D1RmsbU7Asr5tk3e7dP1iKru1QS291eXxjk4K3ddDoWkKm3bLTbDfqrTqYtk2psfcBO19tP8T6gr9I9HDZkfZwzUaDdaytTqr/naDXXXG/7m/D6Do4bbSc5blTyuab2rpKltXTmFHojYErCnnWq7TWrYI6pm20M2YRVA8VPDtJtMvNxXR+Hm5Xlemto2qhtHUVMKVWgOVBys2/f12a1+y1ob7NbVcNRIVsd5cvJ7R8f3gemNn2p+kNpNeqHrZtnXYVMajdmN1BAtaxIAAt5ot0CSu2ovlZqfgfmJnjlfZ0eTxz0s09vRH3a93m/czG1U+0fijFBPu1/F85dendbelOhwa4c9KW61/JjNbY0C6J+LL+8LSpDe17rQTEniWb8R8YbGuCjU5gEBbE4/V49UWJ1FGTX8nu/pGWi62DN5O9+8hqjLh+bveEh5YK0ehvXSjftmmqnxlmZ4QJskyU1vxOPtZfKWeVf9X12yAQLpHYdWqYIu8zNU3s27AL9gHgB2630sNKV/r4CW6nKw5ZXX1aFRKinBlZWVl5lqC9iPP4eqLpU5rDLbQ7rbyt6MyVhqe/2+lI9O0ZbL4+aSbkgvb7t0T9otl2mg1QOqvSoNXr0d7KmoGvHQjzz5JtFQuzueeozM3tE3P6w2zi2t8d1l3WxbE8RpxFou783ekSaTaXqvvcIKq9sfZ/eUx3vSlVddZaBaFXcvvLlkrd3d4Hh5ortlTdt6UZunV2/N3YptRGVrNu+TZm42+UmtMZekpVT1bklm+7WmuTM27wA9VuyE2A/er3cVb9rfOCuOq03gz/mW3HTsjewUiKbVLKq5LT9LUZX8baD4yNxrca6lA7q82X4flFbEsxtzMzezC0Kh4cv/ABxhKRO6M17suMqPtKOau6MlXFezwjtC4pKCImKRNRzd+b9o6an3a+ysVVO3K2/ZE9jmyZebsiqbChpPYs3LvN652NoADLov4vl8Jg1/u2t5S8qxy8J1yQ2alg2m7u7rNvfXbOWOlKWy9OVXrU2bZa9KpSr9Wql6lJkHLfTioHhYGd5Bduf69U8z9tdlsKNQa6tTb0e0fP4dkz8s3i3/AA91k5nSvSmzvtLvR2Xq6fdNatUq7TUOt6lR7gEte5AAH7kP2dQHbqVyRzMuPiFJnLjnRdfqdpp1OxWGXsnQ/oTMce47M+ca+k0Bu29qbcTjn7S7IiX339FVX+sLsvT6V2wSlVbyd5FZra3Av9fGdG3B6XXTp00g6izHR/SNKs7UxklVealUXF19VtD7p1ALL5MQ05VVYjVp3bSdOqsWanb/ANZcqLHNemR5MpqO7xjNZb+V7Up23bCNOilhNokGx3pd4yEC2ZZpyPFYMXkKXXhAILHQbzSMBvBg3s/XCEpo4ViAyry5Lljkey48R2QYS8CI7OSj2tkq5ZfKGO0ZtaStTIq3HBlxb0bf1+Uqnshd7rk27k2NMtjoTb+p9fhFvTWY+zFh4S4Xqh5dIeZmbL32Blw9ofpl/wBTLVXmAb8T+FfnEto6UpJwOfs8vxMmzbeKiMbY4t7XHTQ21j3Gf08tb0fFh28uTRW92tKrIDqRcjlbvLfwMpNWgmQ/sCCptNGmxxWpXpU2bu4lwCfcLxCtWzqu/Lm7NjzY3N7frOp0Ht1OhttKtUDNSp9buquTZGiwGnrInGRQeI5plz737an97bzXpP3v9aHqqBTpAZZY5N6VzfTwH9519jXHYqIJbCrVq1urx3dLUw9+JuVYfh885+1MXZAUVWpU8WZb5NYlrtc8d62ltAI/sdMigly3ex5sVp3Og95J98jVsn7tbZMr+w7gBbje3W9H1fOTZNWUWlON1tcsozsSfeXM1nTC80vUSqWa1TBct3d/vadQbK6Lxy/Cq9kHTTe7v1+8arMd60VpxzaqE8T9ay6dD7vXypohN6+62M2ekaNB6OyKn8R0htOPV02XrKGzKeFSoOLNa7YgHTwJBDt1BMd0PZqOdfq03nxyxXmx01sLm3qEY+2XRNDZNhpVnyq/eqpWqg6pqhQkboYHSxJyNjbgbz2+y9HVEpWTDZ/Kr1PvK9Zu01FFlJNuORsDYW4D5V/iX08HqfwS1l2inTcNVqU6lRqbVB3AGZrEeUD2keMi5NMMd3h6Lpyl0fUShUqAOKVJMmanTporFAVR9AiEA3wJ0y0FrTx+209nd2w2N8O7jSFAY2GpY6sb34aWjA+11IUEd6f8RtqrijsqLQ2alppSW/M3Fn4kk9g1870h9oK1Zr8IsdTmtfXK8ROkEGJBCJ3l3sm/QCcym1uGWYbdbLlmHck6m8xFllLWmGHrNOg+11BUSoHbrUxZXXm9c910J0sNroZEKKqbtVf2I8x1/UT52r+I/F9cZ2vsptHV7cmu7Vypt79R+oHxlTm7R5MJ6vctTON4PqwWUNlzd3m90ca2MzRriiruo++ZcVqN/kr2lfSN7X7Bw1Ojt+znxk+XKrLvccV8n/mA6oY6b0PUQFuEwoA4jdp8y95mtw01l70jW6QtvelNslmsTl7LfpF0Z+s1hWjRBalsfyyqTbupgXQhrEMrekvjqP0MiRwXgcvdbXbBWZlXLdVjxNvPByyJStZr2Vva5YF3eWKjwYqkKyB8V5uXeZvC4F+wcdP0hXsdf/yv6CAA3oWbPHL16CufrGSGt5pIHv8AwqjsNIcKYOPlb37y9pW7KPxfCMWI1szeisGo6zJzutyqsNJ3bzQqvKsxTm63qb/d+0GgjE6bZrZTNHZxUqDmVkbNWVirLbW9x6tPPaHppdl9peb46/CPMd2wKb3Nj5Oh+UjKbi8MtXalR3a9mf0sea3bePUzur9eGkxs9RBSQZszY92/N64Wmh4bsnSvbd2ho9YyoD3+7uq1rkX8I0tAp2q273YIJvQ9JRAhtmUBl1jrjsi1KmMb+l8v7Qy3Og9lf2iOEekWFDZto2my5Kq45eUdB+pE+b7B0lW/jxtAf74l2VmbmOJ3b+J5R657z7UUy+w1go1ZkXe3cVzFyfVPmNcjLTgN0eodvvk53WnR4ZLt6Xpb7ZbdtirQzfDFaa06d1ap2WNtTc+8wKfZatakatRKLVar00paFsVW7PpppoNL6nzRr7EbBTyfbXTMUGWls1L/AObazqB6gNSewXPZGemHWntSs1Trq9naq6q25SNM40wOCAkkgcSNSTeTJu8tL+XjFytv2LYld6dN8yirepmVyey3sNb65DTTWcOvQKGdnpXaXLuj0zS3m/mqGbjy3HDUcOy04z1DwJvLsmhh7AyTV5RkaaG9joq/MTivHHz9vCdTaKQp4Y45Jiy425hqJx9mqENp2807Z6BrpQXaSmFJlyVqjFWqedRxt5zabYdMPJ3zXuaNXOmr91lVl94uJhjfKI/Zcl9jseakzUm8rTUfoQJ0HSzejF8ufWgAtolXp73GdMjxie1pHCrnMtoPA9XnZscscsd3K17eu0NW9cWy3fr3ykcNXlCDMpico0iFz2SLSd+H+plVdOOp4TIEjwHG+WFMwzfmhSu7e6+zrl+1v1giBxHM3+35Q2em/wCHq+Q/5f7S4PGSL833VvH7f7dTT/dAHZ+U372Te+4/c/pDVE7Pam9nKY6elkspDnVF3pdNLxt1T2su9KWnAg7eaHo092XTBDaRjU6mKq02mzHdPd73djQWCpX8co0qGRVxmlSBbUquK+zGlQZWvkveZYHDshUEkGlw3bZN+GEZN2ApiN04HHH+0mzVNo2N0Uqm9S61+XcNRQT+v7z5l051f8ZVWmipSRsEUHKyjTU9p8T4z6B9remFoFKIOO91tX2V1VPPdrG3ghnzKtULuznmZmY+szPOurwT5e++yu2ONmpGmLPQTq9mWpiqNtdS965v2KA+vgG8Zy+m9sQVqNCkS2zU2qtk38yvXPNtFTxJ7PAaesnR1IPSQvVfZqPUUl3VXNrJrYdl73ueIv46KbU2wCvdUqsi0m/mvvM2t+HAWPZNJOE2/mcjbdperVfHJwzHS2Xb2Rc0ns26wC82QtbsEd2jpmqVwS1FPJpKKf7RdDUKWvus2TFr7zeJ7T4e8+Mm81tjuTrRcL4iVaM1Rfv5d3+p/WFpbMjUKr65Iy23hjr5rXPb2+ErQ9mdgQdcgKZ7y7nlt2J7zYT6T0xsO1Yqlcrk7K3V7uNGkByKBw7dPML6zwHQdc0dspVFGTo33a82VQggfqRPpXTD1KdJRUqLVqsuVatllx3t024AACX05/LzXlPs9tdQ7Y4L7tVXZl9RuLfEz1OU8Jsu0mjXWooVmXLFebK9xaw9c9L0bttatmXp9UqMq44nJm4nj6xHlGddCo0WqEyNUmC3hJ0mkNoXeir07TpbVbG8SqC/DllxFha/hIVmPrdhU5uEZMpo31yyFpuqYu7RFpC0CdqTH6y9wmdorYL7XLF6FEls2/D3ff5orWuOM1unVbSSDvJHtPq9BWi1am4a47+639fheFZ78D9eH14GGtdbGCQ6a3hjTmKdLehysKcikHNN9X2fil0wPH6+rQ1/CTTkXQSGHhJShAZKlYzYvuygZtf9MQEpxkGLKOaVtxApMC7IuNRmbvLTA1PxIgHiP8QKtGpWVqdQPur1m8rDK1tLTyzimFpGzElS1TUWvmwAAtpoB49s10iUNd8WZ0BsrNqSPXANqq27q/Mn5zLK8u3DHWMfQKnR38VQ/wC4oUkZqlTrWbd6taaF7AXyAFvA3E89UXo6iTejtW1BXKM9TaE2PJgLm1II7KBoNW7dQJvZekdnOzU9nd3BWlVVKhv1e93GF9AbAEjgbcbTkVqtMM4wzPW55NvH2Mg1iOOo4/C1W2lhjo9tNaktWtTTZ02fq8uY9a+RdV1Y6gAE8JzaIDc1RVHpX/QD+0DVcu7OxuzsWZvKYm5/eNbNsWS3Jt4f1lYy08tYzkxVGzrTTEVXb/MyxVMvNpfs/XjA061ldN7Fl5cu8O2Oh6mlPq+5litscRxNj6oHqd2/VnLJVVPKv4AHX3TX1ZzLfYnRdFDVFRw/VUsWbFeZuIS/Zfx8PPadXpT7Q1tpa7YL5K01xVVItYXPCwHwmdurp/CIlqSOjNT6qgn+Za5fIGxHKO3gPOZysLcZUZ3m8joTxv8A6t73T1WxC2zUrHLJcmbmZmOp1988ipM9P0W//SJ6K4/AkRZIyNP54IPKqvAdb2RM9jFrrYxDaHtkBDNU3tItUj0VpYPvfXyh1qbsXOkrOA027mCc9kyX8JkWguYoSC3pL5Xdlsew93803QrGm2ahcu6zLli3ljziCJ/Ezb3pM3niXqaS5lzHukgHfpt+Zo2gnPpsQ0cpv4x1zwyklQwArDsKy1qjKJWxqcLaLF7/AIptXtEZ5DNMYuj7sheLSjCmGDxINCB4tA5Tfzzl/a7pCnR6PrBhdqqrSprli2puTp2WVfjGq21iijVGyxXebFS276hPnHTG39Zu7zPkzVKjtlkxN9wdg4evwHCTldNPHh7VyDHdgpBlrMexAqjtaoWFh77GIzq9FDGx7d9vVYY/M/CZYTddWd1iY2qiEo4EAlEx/EdT+s3SOz06AJpqz4jm13pz9t2kvcDh3j5TeaLtVL8Z0e02ymFs5rVerm17RqlX3hfSJqs6lCldLbseO9jyakXVYo6P7St7JGv6XhHrFPJyy/mYhsVsR4ecQNcHHUrzd2+UzUJxUEez5U0ZSdN0/PvLClBjocoukMDCCrAnd6Jq2oMPJb9wJxVj/RtTnHst9fGKoyPV3ij1JupUi1Q9sGTWW9eZqNBs0y53YHIjGDJmM5kGJrMRQ0omDLCDyiVMRcpWUFlvLLMD03c/VpI7s/2f22tTWqux7S6OMlZEOLL4iSZ++H6p/K/p5/pv8U8kapcvHeiSmHWp4TZwQUiYLGZNSCdzEZoVoWnW8ZzwZfWw0crptWsvGWu0TnCpu8ZvPzw0fse62HpVgeBVv9U5ufjvejzTVFwOURaPYn2lovX2FwrOCuLYq+KVFGpDjg1uI84nz96rlQjEkBmbXU5EAf8AiPhPpFGqPGcnp/ovY02WrW6rF+62b/zCfC9vdM88Nujw+XXFeFj6vjS49iqPPxb/AMojHKTWS3bYb3k38PCZ4durLosw7JEl4zSrKkAixlKpi6CMU5tGWYtQ7stvP6Mj92aeUxXeaEwOWaEA2DGdle1SKiFon7xfagnLo1VNoMPu3hXWLQZSKvKqNMGpBu8TWRlpRMwTKyktdNZTJMyxmbxbPQwbl0jfRxo9aprBmpLkzU1bFqlhcJccLkAXHn4cZzjeEWK8zRzi7ekq/azbGa4TZVFlComwbIVVQoAUFlLaWtqTwknns5cn6WH6Z/B/Vz/VXVD2hBUi5aTKbOHQ7VJWcCGlM0YmI3WyCpF7y4HcTamEDRNWhOsgnRgvM9ZFy8sPAadChVtiJzvthtH/AE1JL89Rm+A/9hGqT2nE+1VXKrSHghPxP9pn5P8Ay28HOccGMqf9SxcCMMJjg7qsCbEwsKFm8RUAhFMHebEaKY7yzUCpm49s7BBJBgwimGyavNA8sgEhjI2z7sWZpnOCLfli2nHFGeUzSGCZpLWRGlCCrMcdOMzQclWuZO+dNNcDMJgyB4anT3Ydl0izSiRVtNXEabUuJJj80kNlo/lKymLyEymWm8pWUxlMlozkHDy8xFTVh9hoVK9VadMZO2TcwVVUAkkk6AAAknzRW6HptstNLrK2dS6uQmXVrkzZYrTW4Gt+0k2A46yK/njlTlNRoiWtg0pSSygBmZmxVV5mY6AADiZmqhSoyMMXVmVl8lgbEfGG06ujSNOB0419qPohR+l/nOurThbecq7n0v20keTpr+Hn5tlrRhxuqR5MEBD1uVfRVZGMdVrAW02pusALv6oe27pKlLJQm5kEjsmgY9prazawd5Mo02NgwymAE2DHtNg6mRoJXmiYbLS0Mw6nsMtDvS6hPZAfIbGBcwhbegyZNaRkyEdstdWhQsWjt0GqxhZVSlgqHNW6xcsVbJlW5G92Am17cbEcLygY4nIT1zDCaZoIwqZGbmXM38zSSdr0cvKvJJLZrvMEySQEUZtKmGVmZbjFse0aHE+I0HwkkgbfWtjhkcCUZl7rHUBreNifVc+MgkkjTRaG01KNRWRylQWxdeYXBGQPYbHjxEFeSSBfAqtONV/mMfKZv3MkknNfi7qlE2wB09FZJJLarVfCaUSSSoitCWJJI0stBNzSSSauCKd2W0kkC+W1lkySSiWGtLYySREC0zJJCrZGjN6UYGskkIMmpFHh7KySQqIqqCCVI1QsGHZcGxHxg5JIlRJJJIjf/9k="},
    { id: 8, title: 'Toy Story 3' , imageUrl:"https://vignette.wikia.nocookie.net/doblaje/images/2/29/TS3poster-crowd.jpg/revision/latest/top-crop/width/360/height/450?cb=20200724211622&path-prefix=es"},
];

export default initialMusic;