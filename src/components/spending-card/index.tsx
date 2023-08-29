/**
 * IMPORT
 */
import React from 'react';
import { useTheme } from 'styled-components/native';
import { View, Text as TextNatives } from 'react-native';
import { formatToBRL } from 'brazilian-values';
import { format } from 'date-fns';

// components
import { Text } from '@components/text';

// assets
import CashSvg from '../../assets/icons-svg/cash.svg';
import CashExitSvg from '../../assets/icons-svg/cash-exit.svg';

// typings
import { ISpendingProps } from './index.d';

// styles
import {
    Container,
    WrapperLoading,
    Header,
    ContainerSpending,
    HeaderSpending,
    WrapperText,
    FlatList,
    TextNative,
    WrapperImageProfile,
    ImageProfile,
    WrapperValueAndDate,
    TextNativeValueAndDate,
    TextDescription,
    TextTitleDescription,
} from './styles';
import { handleDateFormatting } from 'src/utils/formated-date';
import { useAuth } from '@hooks/use-hook';
import { IMAGE_DEFAULT } from 'src/commons/constants';

const SpendingCard = ({ testID, data, ...res }: ISpendingProps) => {
    const theme = useTheme();
    const { user } = useAuth();
    return (
        //@ts-ignore
        <Container {...res} testID={testID}>
            {data.length > 0 && (
                <Header>
                    <Text
                        text="Meus Históricos"
                        fontFamily={'Poppins-Medium'}
                        color={theme.colors.gray_150}
                        size={17}
                        letterHeight={32}
                        marginTop={40}
                        align="left"
                    />
                </Header>
            )}

            {data.length > 0 ? (
                <FlatList
                    data={data}
                    keyExtractor={(item: any) => String(item.id)}
                    renderItem={({ item }: any) => (
                        <ContainerSpending activeOpacity={0.8}>
                            <HeaderSpending>
                                <Text
                                    text={`${String(item.category).substring(
                                        0,
                                        10,
                                    )} #${
                                        item?.accountNumber
                                            ? item.accountNumber <= 9
                                                ? `0${item.accountNumber}`
                                                : item.accountNumber
                                            : ''
                                    }`}
                                    fontFamily={'Poppins-SemiBold'}
                                    color={theme.colors.neutral_25}
                                    size={14}
                                    letterHeight={26}
                                    align="left"
                                    width={100}
                                />

                                <TextNative color={theme.colors.neutral_25}>
                                    {item.type === 'receive'
                                        ? 'ENTRADA'
                                        : 'SAÍDA'}
                                </TextNative>
                                {item.type === 'outings' ? (
                                    <CashExitSvg width={22} height={22} />
                                ) : (
                                    <CashSvg width={22} height={22} />
                                )}
                            </HeaderSpending>

                            <WrapperText>
                                <WrapperImageProfile>
                                    <ImageProfile
                                        source={{
                                            uri: user.avatar
                                                ? user.avatar
                                                : IMAGE_DEFAULT,
                                        }}
                                    />
                                    <View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                width: '86%',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                marginLeft: 12,
                                            }}>
                                            <Text
                                                text={'Nome:'}
                                                fontFamily={'Poppins-Medium'}
                                                color={theme.colors.gray_150}
                                                size={14}
                                                letterHeight={26}
                                                weight="400"
                                                align="left"
                                                width={25}
                                            />
                                            <Text
                                                text={user.name}
                                                fontFamily={'Poppins-Regular'}
                                                color={theme.colors.gray_50}
                                                size={14}
                                                letterHeight={26}
                                                weight="400"
                                                align="left"
                                            />
                                        </View>

                                        <View
                                            style={{
                                                width: '86%',
                                                flexDirection: 'row',
                                                paddingLeft: 6,
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                marginLeft: 6,
                                            }}>
                                            <TextTitleDescription
                                                color={theme.colors.gray_150}>
                                                Descrição:
                                            </TextTitleDescription>

                                            <TextDescription
                                                color={theme.colors.gray_50}>
                                                {`${String(item.name).substring(
                                                    0,
                                                    16,
                                                )}${
                                                    String(item.name).length >
                                                    10
                                                        ? '...'
                                                        : ''
                                                }`}
                                            </TextDescription>
                                        </View>
                                    </View>
                                </WrapperImageProfile>
                            </WrapperText>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: '100%',
                                    marginTop: 14,
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    paddingLeft: 14,
                                    paddingRight: 30,
                                }}>
                                <TextNatives
                                    style={{
                                        color: theme.colors.gray_150,
                                        fontSize: 16,
                                        fontFamily:
                                            theme.fonts
                                                .primary_poppins_medium_500,
                                    }}>
                                    valor:
                                </TextNatives>
                                <TextNatives
                                    style={{
                                        color: theme.colors.gray_150,
                                        fontSize: 16,
                                        fontFamily:
                                            theme.fonts
                                                .primary_poppins_medium_500,
                                    }}>
                                    data criação:
                                </TextNatives>
                            </View>
                            <WrapperValueAndDate>
                                <TextNativeValueAndDate
                                    color={theme.colors.gray_50}>
                                    {formatToBRL(item.amount)}
                                </TextNativeValueAndDate>
                                <TextNativeValueAndDate
                                    style={{ marginRight: 14 }}
                                    color={theme.colors.gray_50}>
                                    {handleDateFormatting(new Date(item.date))}
                                </TextNativeValueAndDate>
                            </WrapperValueAndDate>
                        </ContainerSpending>
                    )}
                />
            ) : (
                <WrapperLoading>
                    <Text
                        text={'Você não possui registros'}
                        fontFamily={'Poppins-Medium'}
                        color={theme.colors.gray_150}
                        size={14}
                        letterHeight={26}
                        weight="400"
                        align="left"
                    />
                </WrapperLoading>
            )}
        </Container>
    );
};

/**
 * EXPORTS
 */
export { SpendingCard };
