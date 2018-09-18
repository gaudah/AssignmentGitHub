
https://www.elastic.co/webinars/getting-started-elasticsearch?elektra=startpage
eg. 

POST /inspection1/_doc =here inspection is the index name and _doc is the type
this will insert the document content into db by passing into elasticsearch
by maintaining the unique _id

PUT /inspection1/1234 = where inspection is the index name and 1234 is the _id of the existing doc here update the document if the _id is exist and if _id doesn't exist then it will create the new one 

DELETE /inspection = this will delete the index i.e all _id of specific index

using following way we can update the index setting of specific index
PUT /inspection1
{
"settings": {
  "index.number_of_shards":1,
  "index.number_of_replicas":0
}
} 

Following is the example of all the api's
{
"name":"elastic",
"location":{
  "state":"CA",
  "zipcode":94123
}
}


POST /inspection/_doc
{
"business_address":"hello aishu",
"business_id": 2228
}

POST /inspection/_doc/_bulk
{"index":{"_id":1}}
{"business_address":"San Francisko","business_id": 2228}
{"index":{"_id":2}}
{"business_address":"San Francisko 1","business_id": 2221}
{"index":{"_id":3}}
{"business_address":"San Francisko 2","business_id": 2222}
{"index":{"_id":4}}
{"business_address":"San Francisko 3","business_id": 2223}
{"index":{"_id":5}}
{"business_address":"San Francisko 4","business_id": 2224}



GET _search
{
  "query": {
    "match_all": {}
  }
}


GET inspection/_doc/_search

GET inspection/_doc/_search
{
  "query": {
    "match": {
      "business_address": "hello aishu"
    }
  }
}

GET inspection/_doc/_search
{
  "query": {
    "match_phrase": {
      "business_address": "hello aishu"
    }
  }
}



GET inspection/_doc/_search
{
  "query": {
    "bool": {
      "must": [
        {
         "match": {
      "business_address": "hello aish"
       }
      },
      {
         "match_phrase": {
      "business_address": "hello aishu"
      }
      }
      ]
  }
}
}


GET inspection/_doc/_search
{
  "query": {
    "bool": {
      "must_not": [
        {
         "match": {
      "business_address": "hello aish"
       }
      },
      {
         "match_phrase": {
      "business_address": "hello aishu"
      }
      }
      ]
  }
}
}


GET inspection/_doc/_search
{
  "query": {
    "bool": {
      "should": [
        {
         "match": {
      "business_address": "hello aish"
       }
      },
      {
         "match_phrase": {
      "business_address": "hello aishu"
      }
      }
      ]
  }
}
}


GET inspection/_doc/_search
{
  "query": {
    "match": {
      "business_address": "hello aishu"
    }
  },
  "highlight": {
    "fields": {
      "business_address": {}
    }
  }
}



GET inspection/_doc/_search
{
  "query": {
    "range": {
      "business_id": {"lte": 2227}
    }
  },
  "sort": [
    {"_id": "desc"}
  ]
}



GET /_xpack/sql?format=txt
{
  "query": "select business_id from inspection order by business_address desc limit 2 "
}




GET inspection/_doc/_search
{
  "query": {
    "range": {
      "business_id": {"lte": 2227}
    }
  },
  "aggregations": {
    "business_id": {
      "range": {
        "field": "business_id",
        "ranges": [
          {
            "key": "2221-2223",
            "from": 2221,
            "to": 2223
          },
          {
            "key": "2223-2227",
            "from": 2223,
            "to": 2227
          }
          ]
      }
    }
    
  }
}


GET inspection/_doc/_search
{
  "query": {
    "range": {
      "business_id": {"lte": 2227}
    }
  },
  "sort": [
    { //"business_address":"San Francisko 1",
      "_id": "asc"}
  ]
}

GET /inspection/_analyze
{
  "tokenizer": "standard",
  "text": ["my","name"]
}

GET /inspection/_analyze
{
  "tokenizer": "standard",
"text": "my text is abc1717@gmail.com"
}




GET /inspection/_analyze
{
  "tokenizer": "standard",
  "filter": ["lowercase"], 
"text": "my text Is Abc1717@gmail.Com"
}

GET /inspection/_analyze
{
  "tokenizer": "standard",
  "filter": ["lowercase","unique"], 
"text": "my text Is Abc1717@gmail.Com my text"
}



GET inspection/_doc/_search
{
  
  "sort": [
    {"business_address": "desc"}
  ]
}



GET inspection/_search
{
  "query": {
    "match_all": {}
  }
}

PUT /inspection/_doc/VVRTf2UB98THpw5OlvR6
{
"business_address":"hello bhaiyudi",
"business_id": 7117
}

DELETE /inspection

PUT /inspection1
{
"settings": {
  "index.number_of_shards":1,
  "index.number_of_replicas":0
}
}








why this setting?but after so many insersion or updation it shows you same result as normal default one then why to do this?
PUT /inspection1
{
"settings": {
  "index.number_of_shards":1,
  "index.number_of_replicas":0
}
}

GET inspection/_doc/_search
{
  "sort": [
    {"business_address": "desc"}
  ]
} Not running don't know why?

but following is running:=
GET inspection/_doc/_search
{
  "query": {
    "range": {
      "business_id": {"lte": 2227}
    }
  },
  "sort": [
    {"_id": "desc"}
  ]
}



"highlight": {
    "fields": {
      "business_address": {}
    }
after doing above following happens:=
  "highlight": {
          "business_address": [
            "<em>hello</em> aishh"
          ]
        }  added to result


