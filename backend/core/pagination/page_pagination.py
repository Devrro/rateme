from math import ceil

from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class PagePagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 20

    def get_paginated_response(self, data):
        count = self.page.paginator.count
        total_pages = ceil(count / self.get_page_size(self.request))
        return Response({
            'count': count,
            'pages': total_pages,
            'next': self.get_next_link(),
            'prev': self.get_previous_link(),
            'data': data,
        })
