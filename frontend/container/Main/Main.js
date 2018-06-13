import React, { Component } from 'react';
import { Layout, Col, Row } from 'antd';
const { Header, Content, Footer } = Layout;

class Main extends Component {
    render() {
        return (
            <Layout className='layout'>    
                <Layout>   
                    <Content className='content'>                  
                            {this.props.children}
                    </Content>
                </Layout>                        
            </Layout>
        );
    }
}

export default Main;